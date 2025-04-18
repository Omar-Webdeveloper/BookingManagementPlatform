using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int UserId { get; set; }

    public int RoomId { get; set; }

    public int StaffId { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateOnly? StartDate { get; set; }

    public TimeOnly? EndDate { get; set; }

    public DateOnly? BookingStartDate { get; set; }

    public TimeOnly? BookingStartTime { get; set; }

    public DateOnly? BookingEndDate { get; set; }

    public TimeOnly? BookingEndTime { get; set; }

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual Room Room { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
