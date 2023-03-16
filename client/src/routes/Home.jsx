import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

function Home() {
  return (
    <Container>
      <Fade in={true}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Welcome to</Typography>
          <Typography variant="h1" fontWeight="bold">
            Space 2 Pick
          </Typography>
        </Box>
      </Fade>
    </Container>
  );
}

export default Home;
