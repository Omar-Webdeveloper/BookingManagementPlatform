using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;
using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.EntityFrameworkCore;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace BookingManagementPlatform.Server.UserServicee
{
    public class UserService : IUserServicee
    {
        private readonly MyDbContext _context;
        private readonly IEmailService _emailService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserService(MyDbContext context, IEmailService emailService, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _emailService = emailService;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> RegisterAsync(RegisterDto dto)
        {
            if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
                return false;

            var hashedPwd = BCrypt.Net.BCrypt.HashPassword(dto.PasswordHash);

            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                PasswordHash = hashedPwd,
                PhoneNumber = dto.PhoneNumber
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<string?> LoginAsync(LoginDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(dto.PasswordHash, user.PasswordHash))
                return null;

            return "valid-login";
        }

        public async Task<bool> SendPasswordResetCodeAsync(string email)
        {
            //var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            //if (user == null) return false;

            //var code = new Random().Next(100000, 999999).ToString();
            //await _emailService.SendAsync(email, "Reset Password Code", $"Your code is: {code}");

            //return true;

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null) return false;

            var code = new Random().Next(100000, 999999).ToString();
            await _emailService.SendAsync(email, "Reset Password Code", $"Your code is: {code}");

            _httpContextAccessor.HttpContext.Session.SetString($"ResetCode_{email}", code);

            return true;
        }

        //////

        public bool VerifyResetCode(string email, string inputCode)
        {
            var storedCode = _httpContextAccessor.HttpContext.Session.GetString($"ResetCode_{email}");

            if (storedCode != null && storedCode == inputCode)
            {
                _httpContextAccessor.HttpContext.Session.Remove($"ResetCode_{email}");
                return true;
            }

            return false;
        }
        //////

        public async Task<bool> ResetPasswordAsync(string email, string newPassword)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null) return false;

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(newPassword);

            user.PasswordHash = hashedPassword;
            await _context.SaveChangesAsync();

            _httpContextAccessor.HttpContext.Session.Remove($"ResetCode_{email}");

            return true;
        }

        public async Task<string?> GoogleLoginAsync(string idToken)
        {
            var settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { "820022799549-l2ltlkctk8so89mifm9i1i38j5b5emqb.apps.googleusercontent.com" }
            };

            var payload = await GoogleJsonWebSignature.ValidateAsync(idToken, settings);

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == payload.Email);
            if (user == null)
            {
                user = new User
                {
                    FullName = payload.Name,
                    Email = payload.Email,
                    Image = payload.Picture,
                    PasswordHash = "Google",
                    Role = "User",
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
            }

            return payload.Email;
        }


    }

}
