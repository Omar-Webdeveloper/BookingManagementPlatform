using System;
using System.Collections.Generic;

namespace BookingManagementPlatform.Server.Models;

public partial class ContactUsMessage
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Message { get; set; }

    public string? ClinetName { get; set; }

    public string? Email { get; set; }
}
