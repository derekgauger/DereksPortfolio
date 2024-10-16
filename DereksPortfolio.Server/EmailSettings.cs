using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

public class EmailService
{
    private readonly EmailSettings _emailSettings;

    public EmailService(IOptions<EmailSettings> emailSettings)
    {
        
        _emailSettings = emailSettings.Value;
    }

    public void SendEmail(string to, string subject, string body, string senderEmail, string senderName)
{
        using (var client = new SmtpClient(_emailSettings.MailServer, _emailSettings.MailPort))
        {
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(_emailSettings.Sender, _emailSettings.Password); // Authentication still uses the main configured account
            client.EnableSsl = true;

            var mailMessage = new MailMessage
            {
                From = new MailAddress(senderEmail, senderName),
                Subject = subject,
                Body = $"This message is from ({senderName} : {senderEmail}): \n{body}",
                IsBodyHtml = false
            };
            mailMessage.To.Add(to);

            client.Send(mailMessage);
        }
    }
}

public class EmailSettings
{
    public string MailServer { get; set; }
    public int MailPort { get; set; }
    public string Sender { get; set; }
    public string Password { get; set; }
}