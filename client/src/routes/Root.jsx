import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Box mb="10vh">
        <Outlet />
      </Box>
    </Box>
  );
}

export default Root;
