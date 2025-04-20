using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int? UserId { get; set; }

    public int? RoomId { get; set; }

    public string? Status { get; set; }

<<<<<<< HEAD
    public DateTime? CreatedAt { get; set; }

=======
>>>>>>> 5124f836084c0546db92249c038d1bbb4a1b39d1
    public DateOnly? BookingStartDate { get; set; }

    public TimeOnly? BookingStartTime { get; set; }

    public DateOnly? BookingEndDate { get; set; }

    public TimeOnly? BookingEndTime { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual Room? Room { get; set; }

    public virtual User? User { get; set; }
}
