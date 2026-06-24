import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

export default function IntelligenceVersions({
  versions,
}) {
  return (
    <Paper sx={{ p: 2 }}>
      <h4>Report Version History</h4>

      <List>
        {versions.map((v) => (
          <ListItem key={v.id}>
            <ListItemText
              primary={`Version ${v.version}`}
              secondary={`Updated by ${v.updatedBy} • ${v.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}