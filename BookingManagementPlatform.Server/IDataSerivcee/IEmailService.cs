namespace BookingManagementPlatform.Server.IDataSerivcee
{
    public interface IEmailService
    {
        Task SendAsync(string toEmail, string subject, string body);

    }
}
