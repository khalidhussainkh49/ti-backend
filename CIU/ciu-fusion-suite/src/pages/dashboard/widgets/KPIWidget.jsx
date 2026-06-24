import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getKPIData } from "../../../services/kpiApi";

export default function KPIWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getKPIData().then(setData);
  }, []);

  if (!data) return <p>Loading KPI...</p>;

  return (
    <Paper sx={{ p: 2 }}>
      <h3>COMMAND PERFORMANCE KPI</h3>

      <p>Reports: {data.reports}</p>
      <p>Cases: {data.cases}</p>
      <p>Seizures: {data.seizures}</p>
      <p>Revenue Impact: {data.revenue}</p>
    </Paper>
  );
}