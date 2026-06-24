export function detectAnomalies(cargo) {
  const flags = [];

  if (cargo.value > 1000000) {
    flags.push("HIGH_VALUE_SHIPMENT");
  }

  if (cargo.hsCodeMismatch) {
    flags.push("HS_CODE_MISMATCH");
  }

  if (cargo.routeRiskScore > 80) {
    flags.push("HIGH_RISK_ROUTE");
  }

  if (cargo.declaredWeight < cargo.estimatedWeight * 0.6) {
    flags.push("UNDER_DECLARATION");
  }

  return {
    score: flags.length * 25,
    flags,
  };
}