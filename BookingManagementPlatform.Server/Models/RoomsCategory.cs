using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class RoomsCategory
{
    public int CategoryId { get; set; }

    public string? CategoryName { get; set; }

    public string? Description { get; set; }

    public string? Image { get; set; }

    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();
}
