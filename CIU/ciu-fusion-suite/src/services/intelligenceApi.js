import api from "./api";

export const createReport = async (payload) => {
  const res = await api.post(
    "/intelligence-reports",
    payload
  );

  return res.data;
};

export const getReports = async () => {
  const res = await api.get(
    "/intelligence-reports"
  );

  return res.data;
};

export const getReportById = async (id) => {
  const res = await api.get(
    `/intelligence-reports/${id}`
  );

  return res.data;
};

export const updateStatus = async (
  id,
  status
) => {
  const res = await api.patch(
    `/intelligence-reports/${id}/status`,
    {
      status,
    }
  );

  return res.data;
};