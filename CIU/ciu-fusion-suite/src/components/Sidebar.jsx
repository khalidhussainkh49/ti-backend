import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { menuByRole } from "../config/menuByRole";

export default function Sidebar() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const menu = menuByRole[user?.role] || [];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
        },
      }}
    >
      <Toolbar />

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}