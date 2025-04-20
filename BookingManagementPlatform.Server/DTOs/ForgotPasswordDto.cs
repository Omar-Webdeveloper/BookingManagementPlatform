﻿using System.ComponentModel.DataAnnotations;

namespace BookingManagementPlatform.Server.DTOs
{
    public class ForgotPasswordDto
    {
        [Required, EmailAddress]
        public string Email { get; set; }
    }
}
