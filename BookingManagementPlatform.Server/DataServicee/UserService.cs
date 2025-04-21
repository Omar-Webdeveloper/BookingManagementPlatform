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
            // Save user ID in the session

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

        //==================== start of hala services ====================================================


        public List<User> getAllusers()
        {
            var user = _context.Users.ToList();
            return user;
        }

        public List<Booking> getAllBooking()
        {
            var book = _context.Bookings.ToList();
            return book;
        }


        public Booking AddBooking(int userId, BookingByID bookingDto)
        {
            var booking = new Booking
            {
                UserId = userId,
                RoomId = bookingDto.RoomId,
                Status = "Processing",
                BookingStartDate = bookingDto.BookingStartDate,
                BookingStartTime = bookingDto.BookingStartTime,
                //BookingEndDate = bookingDto.BookingStartDate,
                BookingEndTime = bookingDto.BookingEndTime
            };

            _context.Bookings.Add(booking);
            _context.SaveChanges();

            return booking;
        }


        public List<Room> GetAllRooms()
        {
            var roomss = _context.Rooms.ToList();
            return roomss;
        }

        public List<RoomsCategory> GetAllRoomsCategories()
        {
            var roomsCategories = _context.RoomsCategories.ToList();
            return roomsCategories;
        }

        public List<Booking> getallbookings(int UserId)
        {
            var bookings = _context.Bookings
                .Where(b => b.UserId == UserId)
                .Include(b => b.Room) // عشان يجيب معلومات الغرفة كمان
                .ToList();

            return bookings;
        }

        public List<Room> getRoomByID(int RoomID)
        {
            //var userID = _context.Rooms.FirstOrDefault(b => b.RoomId == RoomID);
            var rooms = _context.Rooms
                .Where(b => b.RoomId == RoomID)
                .ToList();
            return rooms;
        }


        public bool IsRoomAvailable(int roomId, DateTime startDateTime, DateTime endDateTime)
        {
            var startDate = DateOnly.FromDateTime(startDateTime);
            var endDate = DateOnly.FromDateTime(endDateTime);
            var startTime = TimeOnly.FromDateTime(startDateTime);
            var endTime = TimeOnly.FromDateTime(endDateTime);

            var hasConflict = _context.Bookings.Any(b =>
                b.RoomId == roomId &&
                b.Status != "Cancelled" &&
                b.BookingStartDate.HasValue &&
                b.BookingEndDate.HasValue &&
                b.BookingStartTime.HasValue &&
                b.BookingEndTime.HasValue &&
                (
                    // Check if booking overlaps
                    (b.BookingStartDate.Value < endDate ||
                    (b.BookingStartDate.Value == endDate && b.BookingStartTime.Value <= endTime)) &&

                    (b.BookingEndDate.Value > startDate ||
                    (b.BookingEndDate.Value == startDate && b.BookingEndTime.Value >= startTime))
                )
            );

            return !hasConflict;
        }

        public Booking getBookById(int BookID)
        {
            var book = _context.Bookings.FirstOrDefault(b => b.BookingId == BookID);
            return book;
        }

        public void CancelBooking(int bookingId)
        {
            var booking = _context.Bookings.FirstOrDefault(b => b.BookingId == bookingId);
            if (booking != null)
            {
                booking.Status = "Cancelled";
                _context.SaveChanges();
            }
        }

        //==================== End of hala services ====================================================

    }

}
