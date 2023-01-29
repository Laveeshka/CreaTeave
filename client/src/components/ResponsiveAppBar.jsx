import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { theme } from "../mui/theme";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../reducers/userSlice";
import styled from "@emotion/styled";
import { StyledAppBarButton } from "../styled/StyledButton";
import { StyledAppBar } from "../styled/StyledAppBar";

function ResponsiveAppBar() {

  let user = useSelector((state) => state.user.user);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogInClick = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "LOG IN"){
      navigate("/login");
    }
    else {
      dispatch(logoutUser());
      navigate("/");
    }
  }

  //styles

  const activeStyle = {
    textDecoration: "none", 
    color: theme.palette.secondary.main
  };

  const inactiveStyle = {
    textDecoration: "none", 
    color: theme.palette.primary.dark
  }

  return (
    <StyledAppBar position="static">
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
              color: "inherit",
              letterSpacing: ".3rem",
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
            <StyledAppBarButton variant="contained" onClick={handleLogInClick} id="log-in">{ user ? "Log out" : "Log in" }</StyledAppBarButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
