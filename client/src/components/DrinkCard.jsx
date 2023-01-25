import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { theme } from "../mui/theme";
import { deleteDrink } from "../reducers/drinksSlice";
import { useDispatch } from "react-redux";

function DrinkCard({ drink }) {

let dispatch = useDispatch();

const handleDeleteDrinkClick = () => {
    try {
        dispatch(deleteDrink(drink))
    }
    catch (err){
        console.warn(err.message)
    }
}

    return (
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
                <Button variant="contained" size="small" onClick={handleDeleteDrinkClick}>Delete</Button>
              </CardActions>
            </Card>
    )
    
}

export default DrinkCard;