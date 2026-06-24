import api from "./api";

export const getKPIData = async () => {
  const res = await api.get("/kpi/dashboard");
  return res.data;
};