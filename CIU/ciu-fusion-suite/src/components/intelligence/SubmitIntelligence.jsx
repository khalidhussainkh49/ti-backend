import IntelligenceForm from "../../components/intelligence/IntelligenceForm";
import { createReport } from "../../services/intelligenceApi";

import { useNavigate } from "react-router-dom";

export default function SubmitIntelligence() {
  const navigate = useNavigate();

  const handleSubmit = async (
    formData
  ) => {
    try {
      await createReport(formData);

      navigate(
        "/intelligence/reports"
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IntelligenceForm
      onSubmit={handleSubmit}
    />
  );
}