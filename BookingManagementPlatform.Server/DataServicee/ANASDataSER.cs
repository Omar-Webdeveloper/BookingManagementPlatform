using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BookingManagementPlatform.Server.DataServicee
{
    public class ANASDataSER : IANASDataSER
    {
        private readonly MyDbContext _dbContext;
        public ANASDataSER(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }




        public List<Booking> GetAllRequst()
        {
            var requst = _dbContext.Bookings.ToList();
            return requst;
        }


        public bool editBooking(int id, BookingRequstDTO data)
        {
            var booking = _dbContext.Bookings.Find(id);
            if (booking == null)
            {
                return false;
            }
            else
            {
                booking.Status = data.Status;
                _dbContext.SaveChanges();
                return true;
            }
        }


        public List<ContactUsMessage> MessageContact()
        {
            var Message = _dbContext.ContactUsMessages.ToList();

            return Message;

        }
        public bool SendContactMessage(ContactUsMessageDTO message)
        {
            if (message == null)
            { return false; }


            // Map DTO to the actual entity
            var myMessage = new ContactUsMessage
            {
                Title = message.Title,
                Message = message.Message,
                Email = message.Email,
                ClinetName = message.ClinetName
            };
            _dbContext.ContactUsMessages.Add(myMessage);
            _dbContext.SaveChanges();

            return true;


        }

    }
}