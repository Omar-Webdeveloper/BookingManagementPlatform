using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IDataServiceJana
    {
        public List<RoomsCategory> GetCategories();

        public List<Room> GetRoomsByCategory(int categoryId);
        public List<Room> GetStudyRooms();
        //public Room GetStudyRoomById(int id);
        public Room? GetRoomDetails(int roomId);
    }
}

