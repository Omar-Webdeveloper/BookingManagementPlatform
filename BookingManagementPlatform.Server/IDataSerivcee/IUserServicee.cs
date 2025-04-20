using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IUserServicee
    {
        Task<bool> RegisterAsync(RegisterDto dto);
        Task<string?> LoginAsync(LoginDto dto);
        Task<bool> SendPasswordResetCodeAsync(string email);
        Task<string?> GoogleLoginAsync(string idToken);
        public bool VerifyResetCode(string email, string inputCode);
        Task<bool> ResetPasswordAsync(string email, string newPassword);



        //==================== start of hala services ====================================================

        public List<User> getAllusers();

        public List<Booking> getAllBooking();
        public List<RoomsCategory> GetAllRoomsCategories();
        public List<Room> GetAllRooms();
        Booking AddBooking(int userId, BookingByID bookingDto);

        public List<Booking> getallbookings(int UserId);
        public List<Room> getRoomByID(int UserId);

        bool IsRoomAvailable(int roomId, DateTime startDateTime, DateTime endDateTime);

        public Booking getBookById(int BookID);
        void CancelBooking(int bookingId);


        //==================== End of hala services ====================================================


    }
}
