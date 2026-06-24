import api from "./api";

export const uploadEvidence = async (
  reportId,
  formData
) => {
  const res = await api.post(
    `/intelligence-reports/${reportId}/evidence`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data;
};