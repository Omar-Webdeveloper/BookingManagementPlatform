using BookingManagementPlatform.Server.IDataSerivcee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.Controllers.Jana
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IDataServiceJana _data;
        public CategoryController(IDataServiceJana dataservice)
        {
            _data = dataservice;
        }

        [HttpGet("GetAllRoomsCategory")]
        public IActionResult GetCategories()
        {
            var categories = _data.GetCategories();
            return Ok(categories);
        }



    }
}
