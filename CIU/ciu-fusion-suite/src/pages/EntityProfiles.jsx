import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function EntityProfiles() {
  const entities = [
    {
      name: "ABC Import Ltd",
      tin: "123456",
      risk: 90,
      watchlist: true,
    },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>TIN</TableCell>
          <TableCell>Risk Score</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {entities.map((e) => (
          <TableRow key={e.tin}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.tin}</TableCell>
            <TableCell>{e.risk}</TableCell>
            <TableCell>
              {e.watchlist
                ? "Watchlisted"
                : "Normal"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}