using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.Controllers.Jana
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyRoomsController : ControllerBase
    {
        private readonly IDataServiceJana _data;
        public StudyRoomsController(IDataServiceJana dataservice)
        {
            _data = dataservice;
        }

        [HttpGet("GetAllStudyRooms")]
        public IActionResult GetStudyRooms()
        {
            var studyRooms = _data.GetStudyRooms();
            return Ok(studyRooms);
        }

        [HttpGet("GetRoomsByCategory/{categoryId}")]
        public IActionResult GetRoomsByCategory(int categoryId)
        {
            var rooms = _data.GetRoomsByCategory(categoryId);
            if (rooms == null || !rooms.Any())
                return NotFound("No rooms found for this category");

            return Ok(rooms);
        }

        [HttpGet("GetRoomDetails/{roomId}")]
        public IActionResult GetRoomDetails(int roomId)
        {
            var room = _data.GetRoomDetails(roomId);
            if (room == null)
                return NotFound("Room not found");

            return Ok(room);
        }
    }
}
