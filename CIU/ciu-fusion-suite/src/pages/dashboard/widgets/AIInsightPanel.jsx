import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { processIntelligence } from "../../../services/intelligenceAiService";

export default function AIInsightPanel({
  report,
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (report) {
      const result =
        processIntelligence(report);

      setData(result);
    }
  }, [report]);

  if (!data) return null;

  return (
    <Paper sx={{ p: 2 }}>
      <h3>AI INTELLIGENCE INSIGHT</h3>

      <p>
        Risk Score:{" "}
        {data.enriched.riskScore}
      </p>

      <pre
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {data.brief}
      </pre>
    </Paper>
  );
}