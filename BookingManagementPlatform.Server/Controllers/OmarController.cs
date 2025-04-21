using BookingManagementPlatform.Server.DataServicee;
using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmarService = BookingManagementPlatform.Server.DataServicee.OmarService;

namespace BookingManagementPlatform.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OmarController : ControllerBase
    {
        private readonly IOmarService DataBase;
        public OmarController(IOmarService ser)
        {
            DataBase = ser;
        }

        [HttpGet("GetUserInfo/{Email}")]
        public IActionResult GetUserInfo(string Email)
        {
            // Assuming you have a method in your DataBase class to get user info
            var userInfo = DataBase.GetUserInfo(Email);
            if (userInfo == null)
                return NotFound("User not found");
            return Ok(userInfo);
        }

        [HttpPut("UpdateUserInfo/{Email}")]
        public IActionResult UpdateUserInfo(string Email, [FromBody] UserEditProfileDto userUpdateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var result = DataBase.UpdateUserInfo(Email, userUpdateDto);
            if (result)
                return Ok("User info updated successfully");
            else
                return NotFound("User not found");
        }

    }
}
