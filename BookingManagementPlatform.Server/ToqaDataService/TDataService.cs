using BookingManagementPlatform.Server.Models;
using BookingManagementPlatform.Server.Models.ToqaDto;
using BookingManagementPlatform.Server.ToqaIDataService;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.ToqaDataService
{
    public class TDataService : TIDataService
    {
        private readonly MyDbContext _db;

        public TDataService(MyDbContext db)
        {
            _db = db;
        }


        public List<Room> GetAllRooms()
        {
            var rooms = _db.Rooms.ToList();
            return rooms;
        }


        public Room GetRoomById(int id)
        {
            var Room = _db.Rooms.Find(id);
            return Room;

        }


        public Room AddRoom([FromForm] RoomDto dto)
        {
            var NewRoom = new Room
            {
                ServiceName = dto.ServiceName,
                Description = dto.Description,
                Price = dto.Price,
                Duration = dto.Duration,
                CategoryId = dto.CategoryId,
                ServiceImage = dto.ServiceImage,
                Location = dto.Location,
                Capacity = dto.Capacity,
                Seating = dto.Seating,
                MusicLevel = dto.MusicLevel,
                ViewLook = dto.ViewLook,
                Lighting = dto.Lighting
            };

            _db.Rooms.Add(NewRoom);
            _db.SaveChanges();
            return NewRoom;
        }



        public bool UpdateRoom(int id, RoomDto dto)
        {
            var ExistedRoom = _db.Rooms.Find(id);
            if (ExistedRoom != null)
            {
                ExistedRoom.ServiceName = dto.ServiceName;
                ExistedRoom.Description = dto.Description;
                ExistedRoom.Price = dto.Price;
                ExistedRoom.Duration = dto.Duration;
                ExistedRoom.CategoryId = dto.CategoryId;
                ExistedRoom.ServiceImage = dto.ServiceImage;
                ExistedRoom.Location = dto.Location;
                ExistedRoom.Capacity = dto.Capacity;
                ExistedRoom.Seating = dto.Seating;
                ExistedRoom.MusicLevel = dto.MusicLevel;
                ExistedRoom.ViewLook = dto.ViewLook;
                ExistedRoom.Lighting = dto.Lighting;
                _db.Rooms.Update(ExistedRoom);
                _db.SaveChanges();
                return true;

            }
            return false;


        }



        public bool DeleteRoom(int id)
        {
            var room = _db.Rooms.Find(id);

            if (room != null)
            {
                _db.Rooms.Remove(room);
                _db.SaveChanges();
                return true;
            }
            return false;
        }

        public List<RoomsCategory> GetAllRoomsCategories()
        {
            var RoomsCategory = _db.RoomsCategories.ToList();
            return RoomsCategory;

        }

        public RoomsCategory GetRoomCategoryByID(int id)
        {
            var RoomCategory = _db.RoomsCategories.Find(id);
            if (RoomCategory != null)
                return RoomCategory;
            return null;

        }

        public bool AddRoomCategory([FromForm] CategoryDto dto)
        {
            if (dto != null)
            {
                var NewRoomCategory = new RoomsCategory
                {
                    CategoryName = dto.CategoryName,
                    Description = dto.Description,
                    Image = dto.Image
                };
                _db.Add(NewRoomCategory);
                _db.SaveChanges();
                return true;
            }

            return false;

        }

       
   
        public bool UpdateRoomCategory(int id, [FromForm] CategoryDto dto)
        {

            var ExistedRoomCategory = _db.RoomsCategories.Find(id);
            if (ExistedRoomCategory != null)
            {
                ExistedRoomCategory.CategoryName = dto.CategoryName;
                ExistedRoomCategory.Description = dto.Description;
                ExistedRoomCategory.Image = dto.Image;

                _db.RoomsCategories.Update(ExistedRoomCategory);
                _db.SaveChanges();
                return true;

            }
            return false;
        }

        public bool DeleteRoomCategory(int id)
        {
            var roomCategory = _db.RoomsCategories.Find(id);
            if (roomCategory != null)
            {
                _db.RoomsCategories.Remove(roomCategory);
                _db.SaveChanges();
                return true;
            }
            return false;
        }

        public List<User> GetAllUsers()
        {
            var AllUsers = _db.Users.ToList();
            if (AllUsers != null)
                return AllUsers;
            return null;

        }



    }

}
