import { Paper } from "@mui/material";

const mockEntities = [
  { name: "ABC Imports Ltd", risk: 92 },
  { name: "XYZ Shipping", risk: 78 },
  { name: "Global Trade Co", risk: 65 },
];

export default function RiskRadar() {
  return (
    <Paper sx={{ p: 2 }}>
      <h3>HIGH-RISK ENTITY RADAR</h3>

      {mockEntities.map((e) => (
        <div key={e.name}>
          <strong>{e.name}</strong>

          <div
            style={{
              background: "#eee",
              height: 10,
              marginTop: 5,
            }}
          >
            <div
              style={{
                width: `${e.risk}%`,
                background: "red",
                height: "100%",
              }}
            />
          </div>

          <small>Risk Score: {e.risk}</small>
          <hr />
        </div>
      ))}
    </Paper>
  );
}