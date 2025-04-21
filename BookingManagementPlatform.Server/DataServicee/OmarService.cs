using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;

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
    }
}
