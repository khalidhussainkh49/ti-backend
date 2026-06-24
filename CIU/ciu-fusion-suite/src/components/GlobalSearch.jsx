import {
  TextField,
  Paper,
  List,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = [
    {
      type: "Entity",
      name: "ABC Imports Ltd",
    },
    {
      type: "Case",
      name: "CIU/INV/2026/0012",
    },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        fullWidth
        placeholder="Search entities, cargo, cases..."
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <List>
        {results
          .filter((r) =>
            r.name
              .toLowerCase()
              .includes(query.toLowerCase())
          )
          .map((r, i) => (
            <ListItemButton key={i}>
              {r.type}: {r.name}
            </ListItemButton>
          ))}
      </List>
    </Paper>
  );
}