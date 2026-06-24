using CIU.Domain.Entities;

namespace CIU.Application.Interfaces;

public interface IIntelligenceService
{
    Task<IntelligenceReport> CreateAsync(IntelligenceReport report);
    Task<IntelligenceReport> SubmitAsync(Guid id);
    Task<IntelligenceReport> ApproveAsync(Guid id);
}