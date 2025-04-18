using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int UserId { get; set; }

    public int RoomId { get; set; }

    public int StaffId { get; set; }

    public DateOnly BookingDate { get; set; }

    public TimeOnly BookingTime { get; set; }

    public string? Status { get; set; }

    public string? PaymentMethod { get; set; }

    public int? Rating { get; set; }

    public string? Review { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Room Room { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
