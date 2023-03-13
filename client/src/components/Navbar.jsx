import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography>Space To Pick</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
