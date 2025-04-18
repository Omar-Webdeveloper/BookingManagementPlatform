using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class ContactUsMessage
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Message { get; set; } = null!;

    public string ClinetName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }
}
