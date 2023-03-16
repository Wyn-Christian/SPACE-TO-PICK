import { Link } from "react-router-dom";
import { useState } from "react";

import { styled, useTheme } from "@mui/material/styles";

// MUI Components
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";

import MuiDrawer from "@mui/material/Drawer";

// MUI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import WorkIcon from "@mui/icons-material/Work";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideNavItem = ({ drawerOpen, title, to, Icon }) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <Link
        style={{
          display: "inherit",
          textDecoration: "none",
          color: "inherit",
        }}
        to={to}
      >
        <ListItemButton
          sx={{
            minHeight: 38,
            justifyContent: drawerOpen ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: drawerOpen ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {Icon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={{ opacity: drawerOpen ? 1 : 0 }}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

const AdminSideNav = ({ drawerOpen }) => {
  return (
    <List>
      {drawerOpen && (
        <Fade in={drawerOpen}>
          <Typography textAlign="center" variant="h5">
            Admin Dashboard
          </Typography>
        </Fade>
      )}
      <SideNavItem
        drawerOpen
        title="Dashboard"
        to="/admin"
        Icon={<DashboardIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Listings"
        to="/admin/listings"
        Icon={<HomeWorkIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Sellers"
        to="/admin/sellers"
        Icon={<WorkIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Customers"
        to="/admin/customers"
        Icon={<GroupsIcon />}
      />
      <Divider />
      <SideNavItem
        drawerOpen
        title="Account"
        to="/admin/account"
        Icon={<AccountBoxIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Log out"
        to="/log-in"
        Icon={<LogoutIcon />}
      />
    </List>
  );
};

const SellerSideNav = ({ drawerOpen }) => {
  return (
    <List>
      {drawerOpen && (
        <Fade in={drawerOpen}>
          <Typography textAlign="center" variant="h5">
            Seller Dashboard
          </Typography>
        </Fade>
      )}
      <SideNavItem
        drawerOpen
        title="Dashboard"
        to="/seller"
        Icon={<DashboardIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Listings"
        to="/seller/listings"
        Icon={<HomeWorkIcon />}
      />
      <Divider />
      <SideNavItem
        drawerOpen
        title="Account"
        to="/seller/account"
        Icon={<AccountBoxIcon />}
      />
      <SideNavItem
        drawerOpen
        title="Log out"
        to="/log-in"
        Icon={<LogoutIcon />}
      />
    </List>
  );
};

function SideNav({ drawerOpen, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={drawerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <Divider />

      {/* ADMIN Side Nav */}
      <AdminSideNav drawerOpen={drawerOpen} />
      {/* SELLER Side Nav */}
      <SellerSideNav drawerOpen={drawerOpen} />
    </Drawer>
  );
}

export default SideNav;
