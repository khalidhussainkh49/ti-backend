namespace CIU.Domain.Entities;

public class WatchlistEntry
{
    public Guid Id { get; set; }

    public string EntityType { get; set; } = string.Empty;

    public string EntityName { get; set; } = string.Empty;

    public string Reason { get; set; } = string.Empty;

    public double RiskScore { get; set; }

    public bool Active { get; set; } = true;

    public DateTime CreatedAt { get; set; } =
        DateTime.UtcNow;
}