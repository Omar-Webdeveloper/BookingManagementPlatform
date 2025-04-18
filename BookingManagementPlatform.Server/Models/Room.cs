using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Room
{
    public int RoomId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string? Description { get; set; }

    public decimal Price { get; set; }

    public int Duration { get; set; }

    public int? CategoryId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? ServiceImage { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual RoomsCategory? Category { get; set; }
}
