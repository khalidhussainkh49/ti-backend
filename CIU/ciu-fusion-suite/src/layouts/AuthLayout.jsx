// src/layouts/AuthLayout.jsx
import { Box } from "@mui/material";

export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b1f3a",
      }}
    >
      {children}
    </Box>
  );
}