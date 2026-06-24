import { Button, Stack } from "@mui/material";
import { updateStatus } from "../../services/intelligenceApi";

export default function WorkflowActions({
  reportId,
  status,
  onRefresh,
}) {
  const submitForReview = async () => {
    await updateStatus(reportId, "Submitted");
    onRefresh();
  };

  const approve = async () => {
    await updateStatus(reportId, "Approved");
    onRefresh();
  };

  const reject = async () => {
    await updateStatus(reportId, "Rejected");
    onRefresh();
  };

  return (
    <Stack direction="row" spacing={2}>
      {status === "Draft" && (
        <Button
          variant="contained"
          onClick={submitForReview}
        >
          Submit
        </Button>
      )}

      {status === "Under Review" && (
        <>
          <Button
            color="success"
            onClick={approve}
          >
            Approve
          </Button>

          <Button
            color="error"
            onClick={reject}
          >
            Reject
          </Button>
        </>
      )}
    </Stack>
  );
}