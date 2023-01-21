import MyDrinks from "./pages/MyDrinks";
import CreateDrink from "./pages/CreateDrink";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import DrinkDetails from "./components/Drinks/DrinkDetails";
import { useRoutes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import { useState } from "react";
import { theme } from "./mui/theme";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let routes = useRoutes([
    //These are the same as the props you provide to <Route>
    //What would be in the Home component should there be one?
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/my-drinks",
      element: <MyDrinks />,
      //Nested routes use a children property
      children: [{ path: ":drinkId", element: <DrinkDetails /> }],
    },
    { path: "/create", element: <CreateDrink /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div className="App" style={{ backgroundColor: theme.palette.secondary.main, height: "100vh" }}>
      <ResponsiveAppBar isLoggedIn={isLoggedIn} />
      <Container
        fixed
        sx={{ p: 2, height: "100%" }}
      >
        {routes}
      </Container>
    </div>
  );
}

export default App;
