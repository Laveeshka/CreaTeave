import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getDrinks } from "../reducers/drinksSlice";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { theme } from "../mui/theme";
import DrinkCard from "../components/drinks/DrinkCard";
import DrinksList from "../components/drinks/DrinksList";

function MyDrinks() {
  let user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDrinks = async () => {
      const result = await dispatch(getDrinks());
    };
    const fetchDrinksResult = fetchDrinks().catch(console.error);
  }, [dispatch]);

  let drinks = useSelector((state) => state.drinks.drinksArray);
  console.log("User drinks are: ", drinks);

  if (!user) return <Navigate replace to="/login" />;

  return (
    <Box>
      {/* <DrinksList drinks={drinks}/> */}
      {/* <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {drinks.map((drink, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <DrinkCard drink={drink}/>
          </Grid>
        ))}
      </Grid> */}
      
    </Box>
  );
}

export default MyDrinks;
