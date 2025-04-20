using System.ComponentModel.DataAnnotations;

namespace BookingManagementPlatform.Server.DTOs
{
    public class LoginDto
    {
        [Required, EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? PasswordHash { get; set; }
    }
}
