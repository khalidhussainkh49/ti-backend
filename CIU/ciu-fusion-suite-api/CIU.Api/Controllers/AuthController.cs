using Microsoft.AspNetCore.Mvc;

namespace CIU.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login()
    {
        return Ok(new
        {
            token = "sample-jwt-token"
        });
    }
}