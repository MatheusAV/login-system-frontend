import { Typography, Container } from "@mui/material";

function DashboardPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Typography>Esta é uma página protegida!</Typography>
    </Container>
  );
}

export default DashboardPage;
