using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Room
{
    public int RoomId { get; set; }

    public string? ServiceName { get; set; }

    public string? Description { get; set; }

    public int? Price { get; set; }

    public int? Duration { get; set; }

    public int? CategoryId { get; set; }

    public string? ServiceImage { get; set; }

    public string? Location { get; set; }

    public int? Capacity { get; set; }

    public string? Lighting { get; set; }

    public string? ViewLook { get; set; }

    public string? MusicLevel { get; set; }

    public string? Seating { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual RoomsCategory? Category { get; set; }
}
