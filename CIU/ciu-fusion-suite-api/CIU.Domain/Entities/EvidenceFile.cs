namespace CIU.Domain.Entities;

public class EvidenceFile
{
    public Guid Id { get; set; }

    public Guid CaseId { get; set; }

    public string FileName { get; set; } = string.Empty;

    public string FileType { get; set; } = string.Empty;

    public string FilePath { get; set; } = string.Empty;

    public long FileSize { get; set; }

    public DateTime UploadedAt { get; set; }
}