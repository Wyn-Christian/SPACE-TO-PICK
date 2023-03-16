import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// MUI components
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Custom
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

function Root() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <Box display="flex">
        <Navbar
          drawerOpen={drawerOpen}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideNav
          drawerOpen={drawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ ...theme.mixins.toolbar }} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Root;
