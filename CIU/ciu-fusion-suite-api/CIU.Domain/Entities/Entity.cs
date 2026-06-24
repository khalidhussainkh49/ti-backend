namespace CIU.Domain.Entities;

public class Entity
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Type { get; set; } = string.Empty;

    public string TIN { get; set; } = string.Empty;

    public string RCNumber { get; set; } = string.Empty;

    public double RiskScore { get; set; }

    public bool IsWatchlisted { get; set; }
}