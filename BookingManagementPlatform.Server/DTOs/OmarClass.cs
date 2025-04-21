using System.ComponentModel.DataAnnotations;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.Models;

namespace BookingManagementPlatform.Server.DTOs
{
    public class OmarClass
    {

        public string? FullName { get; set; }

        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

        public string? Image { get; set; }
    }
}
