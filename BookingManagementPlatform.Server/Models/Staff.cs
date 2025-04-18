using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Staff
{
    public int StaffId { get; set; }

    public string FullName { get; set; } = null!;

    public string? Specialty { get; set; }

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public DateTime? CreatedAt { get; set; }

    public int? CategoryId { get; set; }

    public virtual RoomsCategory? Category { get; set; }
}
