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
import { StyledAppBox } from "./styled/StyledAppBox";
import { StyledAppContainer } from "./styled/StyledAppContainer";

function App() {

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
  }, [dispatch]);

  

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
    <StyledAppBox className="App">
      <ResponsiveAppBar />
      <StyledAppContainer
        fixed
      >
        {routes}
      </StyledAppContainer>
     
    </StyledAppBox>
  );
}

export default App;
