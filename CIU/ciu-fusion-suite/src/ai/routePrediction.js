export function predictRoutes(entity, history) {
  const routes = {};

  history.forEach((h) => {
    routes[h.route] = (routes[h.route] || 0) + 1;
  });

  const sorted = Object.entries(routes).sort(
    (a, b) => b[1] - a[1]
  );

  return {
    mostLikelyRoute: sorted[0]?.[0] || null,
    confidence: sorted[0]?.[1] || 0,
  };
}