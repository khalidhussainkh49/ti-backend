import {
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import useRealtimeAlerts from "../../../hooks/useRealtimeAlerts";

export default function AlertsFeed() {
  const alerts = useRealtimeAlerts();

  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Typography variant="h6">
        LIVE INTELLIGENCE ALERTS
      </Typography>

      {alerts.map((a) => (
        <div
          key={a.id}
          style={{
            marginTop: 10,
            padding: 8,
            borderLeft:
              "4px solid red",
          }}
        >
          <Chip
            label={a.type}
            size="small"
          />
          <p>{a.message}</p>
          <small>{a.time}</small>
        </div>
      ))}
    </Paper>
  );
}