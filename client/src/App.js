import MyDrinks from "./pages/MyDrinks";
import CreateDrink from "./pages/CreateDrink";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
//import DrinkDetails from "./components/Drinks/DrinkDetails";
import { useRoutes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { theme } from "./mui/theme";
import { fetchMe } from "./reducers/userSlice";
import { getToppings, getTeaRanges } from "./reducers/drinksSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  let status = useSelector((state) => state.user.status);
  const dispatch = useDispatch();

  //check whether the user is logged in for authorization
  //while checking, set a circular progress
  //if user is not logged in, set re-direct the user to the login page
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

    const fetchUserResult = fetchUser()
      .catch(console.error);

      const fetchToppingsResult = fetchToppings().catch(console.error);
      const fetchTeaRangesResult = fetchTeaRanges().catch(console.error);
    // try {
    //   dispatch(fetchMe());
    // }
    // catch(err){
    //   console.log(err);
    // }
  }, []);

  

  let routes = useRoutes([
    //These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/my-drinks",
      element: <MyDrinks />,
      //Nested routes use a children property
      //children: [{ path: ":drinkId", element: <DrinkDetails /> }],
    },
    { path: "/create", element: <CreateDrink /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div className="App" style={{ backgroundColor: theme.palette.secondary.main, height: "100vh", overflow:"scroll" }}>
      <ResponsiveAppBar />
      <Container
        fixed
        sx={{ p: 2, height: "100%" }}
      >
        {/* { status === "loading" ? <CircularProgress /> : null } */}
        {routes}
      </Container>
    </div>
  );
}

export default App;
