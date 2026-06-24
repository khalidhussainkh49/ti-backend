// src/components/Topbar.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

export default function Topbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Customs Intelligence Fusion Suite
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <NotificationBell />
          <UserMenu />
        </Box>

      </Toolbar>
    </AppBar>
  );
}