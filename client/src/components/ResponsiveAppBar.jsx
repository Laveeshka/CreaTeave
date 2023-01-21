import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { theme } from "../mui/theme";
import { NavLink } from "react-router-dom";

const pages = ["Home", "My Drinks", "Create"];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ user }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  const activeStyle = {
    textDecoration: "none", 
    color: theme.palette.secondary.dark
  };

  const inactiveStyle = {
    textDecoration: "none", 
    color: theme.palette.text.primary
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalDrinkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CreaTeave
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/home">Home</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key="my-drinks" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/my-drinks">My Drinks</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key="create" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/create">Create</NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <LocalDrinkIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CreaTeave
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="home"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "primary",
                display: "block",
              }}
            >
              <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/home">Home</NavLink>
            </Button>
            <Button
              key="my-drinks"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "primary",
                display: "block",
              }}
            >
              <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/my-drinks">My Drinks</NavLink>
            </Button>
            <Button
              key="create"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "primary",
                display: "block",
              }}
            >
              <NavLink style={({ isActive }) => isActive ? activeStyle : inactiveStyle } to="/create">Create</NavLink>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained">{ user ? "Log out" : "Log in" }</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
