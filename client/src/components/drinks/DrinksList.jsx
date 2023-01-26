import DrinkCard from "./DrinkCard";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

function DrinksList(){

    const drinks = useSelector((state) => state.drinks.drinksArray)

    return (
        <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {drinks.map((drink, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <DrinkCard drink={drink}/>
          </Grid>
        ))}
      </Grid>
    )
}

export default DrinksList;