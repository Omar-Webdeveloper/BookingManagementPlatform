using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.DataServicee
{
    public class DataServiceJana : IDataServiceJana
    {
        private readonly MyDbContext _context;
        public DataServiceJana(MyDbContext context)
        {
            _context = context;
        }

        public List<RoomsCategory> GetCategories()
        {
            var categories = _context.RoomsCategories.ToList();
            return categories;
        }


        public List<Room> GetRoomsByCategory(int categoryId)
        {
            return _context.Rooms
                           .Where(r => r.CategoryId == categoryId)
                           .ToList();
        }

        public List<Room> GetStudyRooms()
        {
            var studyRooms = _context.Rooms.ToList();
            return studyRooms;



        }
        public Room? GetRoomDetails(int roomId)
        {
            return _context.Rooms
                           .FirstOrDefault(r => r.RoomId == roomId);
        }


    }
}

