using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class User
{
    public int UserId { get; set; }

    public string FullName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public string Role { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public string? Image { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
