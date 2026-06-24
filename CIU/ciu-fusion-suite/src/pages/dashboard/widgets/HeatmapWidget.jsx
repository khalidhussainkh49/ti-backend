import { Paper } from "@mui/material";

export default function HeatmapWidget() {
  return (
    <Paper sx={{ p: 2, height: 300 }}>
      <h3>SMUGGLING ROUTE HEATMAP</h3>

      <div
        style={{
          height: "100%",
          background:
            "linear-gradient(90deg, green, yellow, red)",
          borderRadius: 8,
        }}
      />

      <p>
        High-risk border activity visualization
        layer
      </p>
    </Paper>
  );
}