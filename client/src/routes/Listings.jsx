import { useLoaderData, Link } from "react-router-dom";
import { http } from "../http";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Paper, TextField } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const listingsLoader = async () => {
  let data = await http.get("listings").then((result) => result.data.data);
  console.log(data);
  return data;
};

function Listings() {
  const data = useLoaderData();
  return (
    <Container>
      <Typography textAlign="center" variant="h2">
        LISTINGS
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <TextField
          label="Search..."
          sx={{
            width: {
              xs: "100%",
              sm: "70%",
              md: "500px",
            },
          }}
        />
      </Box>
      <Grid container rowSpacing={1} columnSpacing={3}>
        {data.map((listing) => (
          <Grid key={listing._id} item xs={12} sm={6} md={4}>
            <Card>
              <Link
                to={`/listing/${listing._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5">{listing.title}</Typography>
                    <Typography variant="h6">
                      {`${listing.seller.firstName} ${listing.seller.lastName}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Listings;
