import { http } from "../http";
import { useNavigation, useLoaderData } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import Comment from "../components/Comment";

export async function listingDetailLoader({ params }) {
  let detail = await http
    .get(`listings/${params.id}`)
    .then((result) => result.data.data[0]);
  // console.log(detail);
  return detail;
}

function ListingDetail() {
  const data = useLoaderData();

  return (
    <Container>
      <Typography textAlign="center" variant="h2">
        LISTING DETAILS
      </Typography>
      <Paper
        sx={{
          m: "10px auto",
          p: "10px 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "70%",
            md: "600px",
          },
        }}
      >
        <Typography fontWeight="bold">Title</Typography>
        <Typography>{data.title}</Typography>

        <Divider sx={{ width: { xs: "100%", sm: "90%", md: "500px" } }} />
        <Typography fontWeight="bold">Description</Typography>
        <Typography>{data.description}</Typography>

        <Divider sx={{ width: { xs: "100%", sm: "90%", md: "500px" } }} />
        <Typography fontWeight="bold">Seller</Typography>
        <Typography>
          {data.seller.firstName} {data.seller.lastName}
        </Typography>
      </Paper>
      <Typography textAlign="center" variant="h3">
        Comments
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          m: "auto",
          rowGap: 2,
          width: {
            xs: "100%",
            md: "800px",
          },
        }}
      >
        <Comment content="test Comment" />
        <Comment content="test Comment" />
      </Box>
    </Container>
  );
}

export default ListingDetail;
