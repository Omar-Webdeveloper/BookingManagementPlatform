using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class RoomsCategory
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();

    public virtual ICollection<Staff> Staff { get; set; } = new List<Staff>();
}
