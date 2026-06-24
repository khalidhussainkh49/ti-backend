namespace CIU.Domain.Entities;

public class IntelligenceReport
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string Title { get; set; }
    public string Description { get; set; }

    public string Category { get; set; }
    public string Classification { get; set; }

    public string Status { get; set; } = "Draft";

    public string EntityId { get; set; }

    public double RiskScore { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}