export function correlateReports(reports) {
  const correlations = [];

  for (let i = 0; i < reports.length; i++) {
    for (let j = i + 1; j < reports.length; j++) {
      const a = reports[i];
      const b = reports[j];

      let score = 0;

      if (a.entityId === b.entityId) score += 50;
      if (a.route === b.route) score += 30;
      if (a.commodity === b.commodity) score += 20;

      if (score >= 60) {
        correlations.push({
          pair: [a.id, b.id],
          score,
        });
      }
    }
  }

  return correlations;
}