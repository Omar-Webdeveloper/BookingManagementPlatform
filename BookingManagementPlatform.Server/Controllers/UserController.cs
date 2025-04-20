using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServicee _dataService;

        public UserController(IUserServicee dataService)
        {
            _dataService = dataService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] RegisterDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _dataService.RegisterAsync(dto);
            return result ? Ok() : Conflict();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] LoginDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var token = await _dataService.LoginAsync(dto);
            //return token != null ? Ok(token) : Unauthorized("Invalid credentials");
            return token != null ? Ok() : Unauthorized();
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromForm] ForgotPasswordDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _dataService.SendPasswordResetCodeAsync(dto.Email);
            return result ? Ok() : NotFound();
        }

        [HttpPost("verify-reset-code")]
        public async Task<IActionResult> VerifyResetCode([FromBody] VerifyResetCodeDto dto)
        {
            var isCodeValid = _dataService.VerifyResetCode(dto.Email, dto.Code);

            if (!isCodeValid)
            {
                return BadRequest("Invalid or expired code.");
            }

            return Ok("Code verified.");
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto dto)
        {
            var isResetSuccessful = await _dataService.ResetPasswordAsync(dto.Email, dto.Password);

            if (!isResetSuccessful)
            {
                return NotFound("User not found or password reset failed.");
            }

            return Ok("Password reset successful.");
        }


        [HttpPost("google-login")]
        public async Task<IActionResult> GoogleLogin([FromForm] string idToken)
        {
            try
            {
                var result = await _dataService.GoogleLoginAsync(idToken);
                if (result == null)
                    return Unauthorized("Invalid token");

                return Ok(new { message = "Google login success", email = result });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Google login failed", error = ex.Message });
            }
        }
    }
    }
