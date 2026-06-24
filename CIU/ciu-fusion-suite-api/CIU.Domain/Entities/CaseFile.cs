namespace CIU.Domain.Entities;

public class CaseFile
{
    public Guid Id { get; set; }

    public string CaseNumber { get; set; }

    public Guid IntelligenceReportId { get; set; }

    public string Status { get; set; } = "Open";

    public string AssignedOfficer { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Guid AssignedOfficerId { get; set; }

    public DateTime OpenedDate { get; set; }

    public DateTime? ClosedDate { get; set; }
}