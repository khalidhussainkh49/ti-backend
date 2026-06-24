import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { useNotification } from "../context/NotificationContext";

export default function NotificationBell() {
  const { notifications, clearNotification } =
    useNotification();

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={(e) =>
          setAnchorEl(e.currentTarget)
        }
      >
        <Badge
          badgeContent={notifications.length}
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {notifications.length === 0 ? (
          <MenuItem>No alerts</MenuItem>
        ) : (
          notifications.map((n) => (
            <MenuItem
              key={n.id}
              onClick={() =>
                clearNotification(n.id)
              }
            >
              {n.message}
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
}