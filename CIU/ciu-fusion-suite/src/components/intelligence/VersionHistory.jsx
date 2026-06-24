import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function VersionHistory({
  versions,
}) {
  return (
    <List>
      {versions.map((v, i) => (
        <ListItem key={i}>
          <ListItemText
            primary={`Version ${v.version}`}
            secondary={`Updated by ${v.updatedBy} on ${v.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
}