using BookingManagementPlatform.Server.Models;
using BookingManagementPlatform.Server.Models.ToqaDto;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.ToqaIDataService
{
    public interface TIDataService
    {
        public List<Room> GetAllRooms();

        public Room GetRoomById(int id);

        public Room AddRoom([FromForm] RoomDto dto);

        public bool UpdateRoom( int id , [FromForm] RoomDto dto);


        public bool DeleteRoom(int id);

        public List<RoomsCategory>  GetAllRoomsCategories();

        public RoomsCategory GetRoomCategoryByID(int id);

        public bool AddRoomCategory([FromForm] CategoryDto dto);

        public bool UpdateRoomCategory(int id, [FromForm] CategoryDto dto);

        public bool DeleteRoomCategory(int id);

        public List<User> GetAllUsers();

    }
}
