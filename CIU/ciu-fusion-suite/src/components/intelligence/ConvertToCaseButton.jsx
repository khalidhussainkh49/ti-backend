import { Button } from "@mui/material";
import { createCaseFromIntelligence } from "../../services/caseApi";

export default function ConvertToCaseButton({
  reportId,
  onDone,
}) {
  const handleConvert = async () => {
    await createCaseFromIntelligence(
      reportId
    );

    onDone?.();
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={handleConvert}
    >
      Convert to Investigation Case
    </Button>
  );
}