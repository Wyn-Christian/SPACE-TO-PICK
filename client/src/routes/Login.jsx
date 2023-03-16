import { useNavigation, Form } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <Fade in>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Typography variant="h4" mb={3}>
            LOGIN
          </Typography>
          <Paper
            sx={{
              p: 2,
              width: {
                xs: "100%",
                sm: "80%",
                md: "550px",
              },
            }}
            elevation={4}
          >
            <Box
              component={Form}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField type="email" label="Email" />
              <TextField type="password" label="Password" />
              <Button> Log In </Button>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Container>
  );
}

export default Login;
