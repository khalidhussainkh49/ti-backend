export function buildEntityGraph(entities) {
  const graph = {};

  entities.forEach((e) => {
    graph[e.id] = {
      name: e.name,
      links: e.links || [],
    };
  });

  return graph;
}

export function findConnections(graph, entityId) {
  return graph[entityId]?.links || [];
}