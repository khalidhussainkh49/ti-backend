import api from "./api";

export const createCaseFromIntelligence = async (
  reportId
) => {
  const res = await api.post(
    `/cases/from-intelligence/${reportId}`
  );

  return res.data;
};