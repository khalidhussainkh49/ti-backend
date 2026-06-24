import { Paper } from "@mui/material";

export default function IntelligenceScoreCard() {
  const score = 87; // placeholder AI logic later

  return (
    <Paper sx={{ p: 2 }}>
      <h3>INTELLIGENCE IMPACT SCORE</h3>

      <h1 style={{ color: "green" }}>
        {score} / 100
      </h1>

      <p>
        System-wide intelligence effectiveness
        rating
      </p>
    </Paper>
  );
}