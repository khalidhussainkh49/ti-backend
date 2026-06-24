import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function CaseManagement() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          CIU/INV/2026/0001
        </Typography>

        <Typography>
          Suspected Smuggling Case
        </Typography>

        <Typography>
          Status: Active
        </Typography>
      </CardContent>
    </Card>
  );
}