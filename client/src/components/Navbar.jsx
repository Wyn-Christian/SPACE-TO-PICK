import { Link } from "react-router-dom";
import { useState } from "react";

import { styled, useTheme } from "@mui/material/styles";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MuiAppBar from "@mui/material/AppBar";

// MUI Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const NavLink = ({ title, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <Button
        sx={{
          m: 0,
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Typography>{title}</Typography>
      </Button>
    </Link>
  );
};

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Navbar({ drawerOpen, handleDrawerOpen }) {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" open={drawerOpen}>
      <Container>
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(drawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box flexGrow={1}>
            <Typography fontWeight="bold" fontSize={26}>
              SPACE 2 PICK
            </Typography>
          </Box>

          <Box display="flex">
            {[
              { title: "Home", to: "/" },
              { title: "Listings", to: "/listings" },
            ].map((v, i) => (
              <NavLink {...v} key={i} />
            ))}
          </Box>

          <Box sx={{ ml: 1 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "inherit" }}
              >
                <AccountCircle sx={{ fontSize: 35 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "35px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                to="/log-in"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">LOGIN</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/sign-up"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">SIGN UP</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
