using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ANASAdminController : ControllerBase
    {
        private readonly IANASDataSER _ser;
        public ANASAdminController(IANASDataSER ser)
        {
            _ser = ser;
        }

        [HttpGet("allRequst")]
        public IActionResult viewBookingRequst()
        {
            var requst = _ser.GetAllRequst();
            return Ok(requst);
        }


        [HttpPut("editRequstBooking")]
        public IActionResult editRequstBooking(int id, BookingRequstDTO data)
        {
            var changeBooking = _ser.editBooking(id, data);
            if (changeBooking == false)
            {
                return BadRequest();
            }
            else
            {
                return Ok(changeBooking);
            }
        }

        [HttpGet("getALLMessage")]
        public IActionResult ContactMessage()
        {
            var message = _ser.MessageContact().ToList();
            if (message != null)
            {
                return Ok(message);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("sendMessage")]
        public IActionResult SendMessage([FromBody] ContactUsMessageDTO message)
        {
            var result = _ser.SendContactMessage(message);
            if (result)
            {
                return Ok(new { message = "Message sent successfully" });
            }
            else
            {
                return BadRequest(new { message = "Failed to send message" });
            }
        }
    }
}
