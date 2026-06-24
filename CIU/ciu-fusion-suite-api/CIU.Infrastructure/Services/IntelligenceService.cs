using CIU.Application.Interfaces;
using CIU.Domain.Entities;
using CIU.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace CIU.Application.Services;

public class IntelligenceService : IIntelligenceService
{
    private readonly AppDbContext _context;

    public IntelligenceService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IntelligenceReport> CreateAsync(IntelligenceReport report)
    {
        report.Status = "Draft";

        _context.IntelligenceReports.Add(report);
        await _context.SaveChangesAsync();

        return report;
    }

    public async Task<IntelligenceReport> SubmitAsync(Guid id)
    {
        var report = await _context.IntelligenceReports.FindAsync(id);

        report.Status = "Submitted";

        await _context.SaveChangesAsync();

        return report;
    }

    public async Task<IntelligenceReport> ApproveAsync(Guid id)
    {
        var report = await _context.IntelligenceReports.FindAsync(id);

        report.Status = "Approved";
        report.RiskScore = CalculateRisk(report);

        await _context.SaveChangesAsync();

        return report;
    }

    private double CalculateRisk(IntelligenceReport report)
    {
        double score = 10;

        if (report.Category == "Smuggling") score += 40;
        if (report.Classification == "Secret") score += 30;

        return Math.Min(score, 100);
    }
}