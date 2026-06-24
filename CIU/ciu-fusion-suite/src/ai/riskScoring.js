import { detectAnomalies } from "./anomalyEngine";

export function calculateCargoRisk(cargo) {
  const anomaly = detectAnomalies(cargo);

  let score = 0;

  score += anomaly.score;

  if (cargo.isWatchlistedImporter)
    score += 30;

  if (cargo.originCountryRisk === "HIGH")
    score += 20;

  if (cargo.previousSeizures > 0)
    score += 25;

  if (cargo.routeRiskScore)
    score += cargo.routeRiskScore * 0.4;

  return {
    riskScore: Math.min(score, 100),
    flags: anomaly.flags,
  };
}