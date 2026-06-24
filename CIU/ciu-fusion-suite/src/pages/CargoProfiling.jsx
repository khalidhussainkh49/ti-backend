import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from "@mui/material";

export default function CargoProfiling() {
  return (
    <Card>
      <CardContent>
        <Typography>
          Container:
          MSKU1234567
        </Typography>

        <Typography>
          Importer:
          XYZ Trading Ltd
        </Typography>

        <Typography>
          Risk Score:
        </Typography>

        <LinearProgress
          variant="determinate"
          value={92}
        />
      </CardContent>
    </Card>
  );
}