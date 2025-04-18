using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Atmosphere
{
    public int Id { get; set; }

    public int? RoomId { get; set; }

    public string? Lighting { get; set; }

    public string? ViewLook { get; set; }

    public string? MusicLevel { get; set; }

    public string? Seating { get; set; }

    public virtual Room? Room { get; set; }
}
