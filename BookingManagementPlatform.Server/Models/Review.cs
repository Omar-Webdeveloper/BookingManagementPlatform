using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Review
{
    public int Id { get; set; }

    public int? BookingId { get; set; }

    public int? Rating { get; set; }

    public string? Review1 { get; set; }

    public virtual Booking? Booking { get; set; }
}
