import MyDrinks from "./pages/MyDrinks";
import CreateDrink from "./pages/CreateDrink";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { theme } from "./mui/theme";
import { fetchMe } from "./reducers/userSlice";
import { getToppings, getTeaRanges } from "./reducers/drinksSlice";
import { useDispatch } from "react-redux";
import EditDrink from "./components/drinks/EditDrink";
import DrinksList from "./components/drinks/DrinksList";
import styled from "@emotion/styled";
import  waves  from "./assets/wavesOpacity.svg"
import { Box } from "@mui/material";
function App() {

  const StyledContainer = styled(Container)(({ theme }) => ({
    padding: 2,
    height: "100%",
    margin: "auto",
  })
  );

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, 
    height: "100vh", 
    overflow:"scroll",
    '&::after': {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "15vh",
      overflow: "hidden",
      transform: "rotate(180deg)",
      content: '""',
      backgroundImage: `url(${waves})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      
    }
  })
  )

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const result = await dispatch(fetchMe());
    }
    const fetchToppings = async () => {
      const result = await dispatch(getToppings());
    }
    const fetchTeaRanges = async () => {
      const result = await dispatch(getTeaRanges());
    }

    const fetchUserResult = fetchUser().catch(console.error);
    const fetchToppingsResult = fetchToppings().catch(console.error);
    const fetchTeaRangesResult = fetchTeaRanges().catch(console.error);
  }, []);

  

  let routes = useRoutes([
    //These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/my-drinks", element: <><MyDrinks /> <Outlet/></>,
      //Nested routes use a children property
      children: [{ path: ":id", element: <EditDrink/>}, {path: "", element: <DrinksList/>}],
    },
    { path: "/create", element: <CreateDrink /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <StyledBox className="App">
      <ResponsiveAppBar />
      <StyledContainer
        fixed
      >
        {routes}
      </StyledContainer>
     
    </StyledBox>
  );
}

export default App;
