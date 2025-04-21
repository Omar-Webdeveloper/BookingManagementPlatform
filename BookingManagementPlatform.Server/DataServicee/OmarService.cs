using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.DataServicee
{
    public class OmarService : IOmarService
    {
        private readonly MyDbContext _context;
        public OmarService(MyDbContext context)
        {
            _context = context;
        }
        public User GetUserInfo(string Email)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == Email);
            if (user == null)
            {
                return null;
            }

            return user;
        }

        public bool UpdateUserInfo(string Email, [FromBody] UserEditProfileDto userUpdateDto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == Email);
            if (user != null)
            {
                user.FullName = userUpdateDto.FullName;
                user.PhoneNumber = userUpdateDto.PhoneNumber;
                user.Image = userUpdateDto.Image;
                _context.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
