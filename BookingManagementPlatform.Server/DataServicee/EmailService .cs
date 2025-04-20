using BookingManagementPlatform.Server.IDataSerivcee;
using System.Net.Mail;
using System.Net;

namespace BookingManagementPlatform.Server.DataServicee
{
    public class EmailService : IEmailService
    {
        public async Task SendAsync(string toEmail, string subject, string body)
        {
            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("rahaf.alsmairat@gmail.com", "ablj duyx gbyd ipvk"),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress("rahaf.alsmairat@gmail.com"),
                Subject = subject,
                Body = body,
                IsBodyHtml = true,
            };

            mailMessage.To.Add(toEmail);

            try
            {
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (SmtpException ex)
            {
                Console.WriteLine($"Failed to send email: {ex.Message}");
            }
        }

    }
}
