using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface TIDataService
    {
        public List<Room> GetAllRooms();

        public Room GetRoomById(int id);

        public Room AddRoom([FromForm] RoomDto dto);

        public bool UpdateRoom(int id, [FromForm] RoomDto dto);


        public bool DeleteRoom(int id);

        public List<RoomsCategory> GetAllRoomsCategories();

        public RoomsCategory GetRoomCategoryByID(int id);

        public bool AddRoomCategory([FromForm] CategoryDto dto);

        public bool UpdateRoomCategory(int id, [FromForm] CategoryDto dto);

        public bool DeleteRoomCategory(int id);

        public List<User> GetAllUsers();

    }
}
