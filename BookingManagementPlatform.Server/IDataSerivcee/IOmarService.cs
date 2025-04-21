using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IOmarService
    {
        public User GetUserInfo(string Email);
        public bool UpdateUserInfo(string Email, [FromBody] UserEditProfileDto userUpdateDto);
    }
}
