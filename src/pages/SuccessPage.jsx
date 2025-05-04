import { Typography, Container } from "@mui/material";

function SuccessPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Login efetuado com sucesso!
      </Typography>
      <Typography>Bem-vindo ao sistema protegido.</Typography>
    </Container>
  );
}

export default SuccessPage;
