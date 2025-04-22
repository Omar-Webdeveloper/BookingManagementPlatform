using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookingManagementPlatform.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServicee _dataServiceServiceService;

        public UserController(IUserServicee dataService)
        {
            _dataServiceServiceService = dataService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] RegisterDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _dataServiceServiceService.RegisterAsync(dto);
            return result ? Ok() : Conflict();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] LoginDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var token = await _dataServiceServiceService.LoginAsync(dto);

            //return token != null ? Ok(token) : Unauthorized("Invalid credentials");
            return token != null ? Ok() : Unauthorized();
        }
                
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromForm] ForgotPasswordDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _dataServiceServiceService.SendPasswordResetCodeAsync(dto.Email);
            return result ? Ok() : NotFound();
        }

        [HttpPost("verify-reset-code")]
        public async Task<IActionResult> VerifyResetCode([FromBody] VerifyResetCodeDto dto)
        {
            var isCodeValid = _dataServiceServiceService.VerifyResetCode(dto.Email, dto.Code);

            if (!isCodeValid)
            {
                return BadRequest("Invalid or expired code.");
            }

            return Ok("Code verified.");
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto dto)
        {
            var isResetSuccessful = await _dataServiceServiceService.ResetPasswordAsync(dto.Email, dto.Password);

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
                var result = await _dataServiceServiceService.GoogleLoginAsync(idToken);
                if (result == null)
                    return Unauthorized("Invalid token");

                return Ok(new { message = "Google login success", email = result });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Google login failed", error = ex.Message });
            }
        }


        //==================================== Hala Controller Methods ============================================


        [HttpGet("getAllUsers")]
        public IActionResult getAllUsers()
        {
            var allUsers = _dataServiceServiceService.getAllusers();
            return Ok(allUsers); // 200
        }

        [HttpGet("getAllrooms")]
        public IActionResult getallrooms()
        {
            var allrooms = _dataServiceServiceService.GetAllRooms();
            return Ok(allrooms); // 200
        }

        [HttpPost("AddBooking")]
        public IActionResult AddBooking([FromBody] BookingByID bookingDto)
        {
            var currentUserId = 16;
            bookingDto.BookingEndDate = bookingDto.BookingStartDate;
            var startDateTime = bookingDto.BookingStartDate.Value.ToDateTime(bookingDto.BookingStartTime ?? TimeOnly.MinValue);
            var endDateTime = bookingDto.BookingEndDate.Value.ToDateTime(bookingDto.BookingEndTime ?? TimeOnly.MinValue);
           
            //if (startDateTime >= endDateTime)
            //{
            //    return BadRequest("End datetime must be after start datetime.");
            //}
            var bookingDuration = endDateTime - startDateTime;
            var roomId = bookingDto.RoomId;

            var room = _dataServiceServiceService.getRoomByID(roomId);
            if (room == null)
            {
                return BadRequest("Room not found.");
            }

            //if (startDateTime >= endDateTime)
            //{
            //    return BadRequest("End datetime must be after start datetime.");
            //}

            var today = DateOnly.FromDateTime(DateTime.Now);
            if (bookingDto.BookingStartDate.Value < today)
            {
                return BadRequest("Start date cannot be in the past.");
            }

            //if(bookingDuration.TotalHours  < 0)
            //{
            //    bookingDuration.TotalHours = (-1 * (bookingDuration.TotalHours));
            //}
            //if (bookingDuration.TotalHours < 2)
            //{
            //    return BadRequest("Booking duration must be at least 2 hours.");
            //}

            bool roomNotAvailable = !_dataServiceServiceService.IsRoomAvailable(roomId, startDateTime, endDateTime);
            if (roomNotAvailable)
            {
                return BadRequest("Room is not available for the selected dates.");
            }

            // ✨ خلي الداتا سيرفس هو اللي ينشئ الحجز
            var addedBooking = _dataServiceServiceService.AddBooking(currentUserId, bookingDto);

            return Ok(addedBooking);
        }



        [HttpGet("GetUserBookings/{userId}")]
        public IActionResult GetUserBookings(int userId)
        {
            // جلب جميع الحجوزات للمستخدم
            var bookings = _dataServiceServiceService.getallbookings(userId);

            // التحقق إذا كانت هناك حجوزات
            if (bookings == null || bookings.Count == 0)
            {
                return NotFound("No bookings found for this user.");
            }

            // تحويل البيانات إلى BookingDto
            var bookingsDto = bookings.Select(b => new getallbookingsDTO
            {
                BookingId = b.BookingId,
                RoomName = b.Room.ServiceName,  // أو أي اسم الحقل من الكائن Room
                Status = b.Status,
                BookingStartDate = b.BookingStartDate.HasValue ? b.BookingStartDate.Value.ToDateTime(TimeOnly.MinValue) : (DateTime?)null,
                BookingStartTime = b.BookingStartTime,
                BookingEndDate = b.BookingEndDate.HasValue ? b.BookingEndDate.Value.ToDateTime(TimeOnly.MinValue) : (DateTime?)null,
                BookingEndTime = b.BookingEndTime
            }).ToList();

            // إرجاع البيانات كـ BookingDto
            return Ok(bookingsDto);
        }



        [HttpPut("CancelBooking/{id}")]
        public IActionResult CancelBooking(int id)
        {
            var Xbooking = _dataServiceServiceService.getBookById(id);
            if (Xbooking == null)
            {
                return NotFound("Booking not found.");
            }
            if (Xbooking.Status == "Cancelled")
            {
                return BadRequest("Booking is already cancelled.");
            }

            _dataServiceServiceService.CancelBooking(id);

            return Ok("Booking has been cancelled successfully.");
        }

        public class Payment
        {
            public int Id { get; set; }
            public int BookingId { get; set; }
            public string PaymentMethod { get; set; }
            public string? CardNumber { get; set; }
            public string? CVC { get; set; }
            public DateTime? ExpiryDate { get; set; }
            public decimal Amount { get; set; }

            // 👇 Add this
            public DateTime PaymentDate { get; set; } = DateTime.Now;
        }








    }
}
