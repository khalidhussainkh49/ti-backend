import { calculateCargoRisk } from "../ai/riskScoring";
import { generateBrief } from "../ai/briefGenerator";

export function processIntelligence(report) {
  const risk = calculateCargoRisk(report.cargo || {});

  const enriched = {
    ...report,
    riskScore: risk.riskScore,
    flags: risk.flags,
  };

  const brief = generateBrief(enriched);

  return {
    enriched,
    brief,
  };
}