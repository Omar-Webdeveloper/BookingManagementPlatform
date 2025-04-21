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
        public OmarController(OmarService ser)
        {
            DataBase = ser;
        }

        [HttpGet("GetUserInfo")]
        public IActionResult GetUserInfo(string Email)
        {
            // Assuming you have a method in your DataBase class to get user info
            var userInfo = DataBase.GetUserInfo(Email);
            if (userInfo == null)
                return NotFound("User not found");
            return Ok(userInfo);
        }

    }
}
