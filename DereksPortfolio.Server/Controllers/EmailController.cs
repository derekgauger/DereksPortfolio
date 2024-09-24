using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class EmailController : ControllerBase
{
  private readonly EmailService _emailService;

  public EmailController(EmailService emailService)
  {
    _emailService = emailService;
  }

  [HttpPost("send-email")]
  public IActionResult SendEmail([FromBody] EmailModel model)
  {
    _emailService.SendEmail("gaugerderek@gmail.com", model.Subject, model.Body, model.Email, model.Name);
    return Ok("Email sent successfully");
  }
}

public class EmailModel
{

  public string Name { get; set; }
  public string Email { get; set; }
  public string Subject { get; set; }
  public string Body { get; set; }
}