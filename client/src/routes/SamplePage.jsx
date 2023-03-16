import { useNavigation } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

function SamplePage({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <Fade in={navigation.state === "loading" ? false : true}>
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
          <Typography variant="h3">This is</Typography>
          <Typography variant="h2" fontWeight="bold">
            {title} Page
          </Typography>
        </Box>
      </Fade>
    </Container>
  );
}

export default SamplePage;
