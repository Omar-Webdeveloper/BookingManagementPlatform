using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IOmarService
    {
        public User GetUserInfo(string Email);
    }
}
