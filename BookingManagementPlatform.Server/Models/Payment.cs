using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int? BookingId { get; set; }

    public int? Amount { get; set; }

    public string? PaymentMethod { get; set; }

    public string? Cardnumber { get; set; }

    public string? Cvc { get; set; }

    public DateOnly? ExpiryDate { get; set; }

    public virtual Booking? Booking { get; set; }
}
