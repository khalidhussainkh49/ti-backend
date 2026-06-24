import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useEffect, useState } from "react";
import { getReports } from "../../services/intelligenceApi";

export default function IntelligenceList() {
  const [reports, setReports] =
    useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data =
      await getReports();

    setReports(data);
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Classification</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {reports.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.reportId}
              </TableCell>

              <TableCell>
                {item.title}
              </TableCell>

              <TableCell>
                {item.status}
              </TableCell>

              <TableCell>
                {item.classification}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}