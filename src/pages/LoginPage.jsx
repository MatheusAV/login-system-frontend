import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import api from "../api/api";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });

      const token = response.data.token;
      login(token);
      navigate("/success");
    } catch (err) {
      console.error(err);
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Usuário"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Senha"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Entrar
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;