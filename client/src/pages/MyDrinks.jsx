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

function MyDrinks() {
  let user = useSelector((state) => state.user.user);
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchDrinks = async () => {
      const result = await dispatch(getDrinks());
    };
    const fetchDrinksResult = fetchDrinks().catch(console.error);
  }, []);

  let drinks = useSelector((state) => state.drinks.drinksArray);
  console.log("User drinks are: ", drinks);

  if (!user) return <Navigate replace to="/login" />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {drinks.map((drink, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{backgroundColor: theme.palette.secondary.dark}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {drink.name}
                </Typography>
                <Typography variant="body2" component="div">
                 {drink.tea_range.name} 
                </Typography>
                <Typography variant="body2" component="div">
                 {drink.flavour} 
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="contained" size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyDrinks;
