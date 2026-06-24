using Microsoft.EntityFrameworkCore;
using CIU.Domain.Entities;

namespace CIU.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<IntelligenceReport> IntelligenceReports { get; set; }
    public DbSet<RefreshToken> RefreshTokens { get; set; }
    public DbSet<WatchlistEntry> Watchlists { get; set; }
    public DbSet<EvidenceFile> EvidenceFiles { get; set; }
    public DbSet<CaseFile> CaseFiles { get; set; }
    public DbSet<Entity> Entities { get; set; }
    public DbSet<AuditLog> AuditLogs { get; set; }
    public DbSet<User> Users { get; set; }
}