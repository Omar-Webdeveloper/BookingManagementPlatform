using System.Diagnostics.Eventing.Reader;
using BookingManagementPlatform.Server.Models;
using BookingManagementPlatform.Server.Models.ToqaDto;
using BookingManagementPlatform.Server.ToqaIDataService;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookingManagementPlatform.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly TIDataService _data;

        public ServicesController(TIDataService data)
        {
            _data = data;
        }


        [HttpGet("GetAllRooms")]
        public IActionResult GetAllRooms()
        {
            var rooms = _data.GetAllRooms();
            if (rooms == null || rooms.Count == 0)
            {
                return NotFound();
            }

            return Ok(rooms);
           

        }
            [HttpGet("GetRoomById/{id}")]
        public IActionResult GetRoomById(int id)
        {
            var room = _data.GetRoomById(id);
            if (room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }

        [ProducesResponseType(StatusCodes.Status201Created)]

        [HttpPost("AddRoom")]
        public IActionResult AddRoom([FromForm] RoomDto dto)
        {
            if (dto == null)
                return BadRequest("Room data is null");
            else
                _data.AddRoom(dto);
            return Ok();
        }


        [HttpPut("UpdateRoom/{id}")]
        public IActionResult UpdateRoom(int id, [FromForm] RoomDto dto)
        {
            var response = _data.UpdateRoom(id, dto);
            if (response == true)
            {
                return Ok();
            }
            else
                return BadRequest();
        }


        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpDelete("DeleteRoom/{id}")]
        public IActionResult DeleteRoom(int id)
        {
            var room = _data.DeleteRoom(id);
            if (room == true)
            {

                return NoContent();
            }
            return NotFound();


        }

        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpGet("GetAllRoomsCategories")]
        public IActionResult GetAllRoomsCategories()
        {
            var RoomsCategories = _data.GetAllRoomsCategories();
            if (RoomsCategories == null)
                return NoContent();
            return Ok(RoomsCategories);

        }


        [HttpGet("GetRoomCategoryByID/{id}")]
        public IActionResult GetRoomCategoryByID(int id)
        {
            var RoomCategory = _data.GetRoomCategoryByID(id);
            if (RoomCategory == null)
                return NotFound();
            return Ok(RoomCategory);

        }

        [HttpPost("AddRoomCategory")]
        public IActionResult AddRoomCategory([FromForm] CategoryDto dto)
        {
            var response = _data.AddRoomCategory(dto);
            if (response == true)
                return Ok();
            else
                return BadRequest();

        }

        [HttpPut("UpdateRoomCategory/{id}")]
        public IActionResult UpdateRoomCategory(int id, [FromForm] CategoryDto dto)
        {
            var response = _data.UpdateRoomCategory(id, dto);
            if (response == true)
            {
                return Ok();
            }
            else
                return BadRequest();
        }

        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpDelete("DeleteRoomCategory/{id}")]
        public IActionResult DeleteRoomCategory(int id)
        {
            var rsponse = _data.DeleteRoomCategory(id);
            if (rsponse == true)
            {
                return NoContent();
            }

            return BadRequest();


        }


        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            var AllUsers = _data.GetAllUsers();
            if (AllUsers != null)
                return Ok(AllUsers);
            return NotFound();

        }





    }
}
