using Microsoft.AspNetCore.Mvc;
using CIU.Application.Interfaces;
using CIU.Domain.Entities;

namespace CIU.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IntelligenceController : ControllerBase
{
    private readonly IIntelligenceService _service;

    public IntelligenceController(IIntelligenceService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(IntelligenceReport report)
    {
        var result = await _service.CreateAsync(report);
        return Ok(result);
    }

    [HttpPost("{id}/submit")]
    public async Task<IActionResult> Submit(Guid id)
    {
        var result = await _service.SubmitAsync(id);
        return Ok(result);
    }

    [HttpPost("{id}/approve")]
    public async Task<IActionResult> Approve(Guid id)
    {
        var result = await _service.ApproveAsync(id);
        return Ok(result);
    }
}