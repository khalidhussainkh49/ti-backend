import api from "./api";

export const addToWatchlist = async (
  entityId,
  reason
) => {
  const res = await api.post(
    `/watchlist`,
    {
      entityId,
      reason,
    }
  );

  return res.data;
};