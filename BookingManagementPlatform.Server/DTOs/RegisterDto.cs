﻿using System.ComponentModel.DataAnnotations;

namespace BookingManagementPlatform.Server.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string? FullName { get; set; }

        [Required, EmailAddress]
        public string? Email { get; set; }

        [Required, MinLength(6)]
        public string? PasswordHash { get; set; }

        public string? PhoneNumber { get; set; }


    }
}
