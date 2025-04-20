using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class Payment
{
    public int Id { get; set; }

<<<<<<< HEAD
    public int BookingId { get; set; }
=======
    public int? BookingId { get; set; }
>>>>>>> 5124f836084c0546db92249c038d1bbb4a1b39d1

    public string? PaymentMethod { get; set; }

    public string? Cardnumber { get; set; }

    public string? Cvc { get; set; }

    public DateOnly? ExpiryDate { get; set; }

<<<<<<< HEAD
    public virtual Booking Booking { get; set; } = null!;
=======
    public int? Amount { get; set; }

    public virtual Booking? Booking { get; set; }
>>>>>>> 5124f836084c0546db92249c038d1bbb4a1b39d1
}
