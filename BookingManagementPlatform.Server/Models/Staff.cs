using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Staff
{
    public int StaffId { get; set; }

    public string? FullName { get; set; }

    public string? Specialty { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public int? CategoryId { get; set; }

    public virtual RoomsCategory? Category { get; set; }
}
