import api from "./api";

export const getVersions = async (
  reportId
) => {
  const res = await api.get(
    `/intelligence-reports/${reportId}/versions`
  );

  return res.data;
};