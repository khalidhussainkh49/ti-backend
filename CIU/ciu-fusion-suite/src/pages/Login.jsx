import {
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { loginUser } from "../services/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({
        username,
        password,
      });

      login(res.token);

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <Card sx={{ p: 4, width: 400 }}>
      <Typography variant="h6">
        CIU Fusion Suite Login
      </Typography>

      <TextField
        fullWidth
        label="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button
        fullWidth
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Card>
  );
}