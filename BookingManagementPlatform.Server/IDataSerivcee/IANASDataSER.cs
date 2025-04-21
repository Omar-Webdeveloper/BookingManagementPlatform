using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IANASDataSER
    {
        public List<Booking> GetAllRequst();
        public bool editBooking(int id, BookingRequstDTO data);

        public List<ContactUsMessage> MessageContact();

        public bool SendContactMessage(ContactUsMessageDTO message);
    }
}
