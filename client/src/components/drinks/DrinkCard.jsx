import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { theme } from "../../mui/theme";
import { deleteDrink } from "../../reducers/drinksSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "../../styled/StyledCard";
import Stack from '@mui/material/Stack';
import { iceLevelDescription } from "../../constants/iceLevelMarks";
import { sweetnessLevelDescription } from "../../constants/sweetnessLevelMarks";

function DrinkCard({ drink }) {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteDrinkClick = () => {
    try {
      dispatch(deleteDrink(drink));
    } catch (err) {
      console.warn(err.message);
    }
  };

  const handleEditDrinkClick = () => {
    navigate(`/my-drinks/${drink.id}`);
  };

  return (
    <StyledCard>
      <CardContent
        sx={{
          display: "flex",
          backgroundColor: "secondary.darkWithOpacity",
          justifyContent: "center",
          padding: 1
        }}
      >
        <Typography variant="body2" component="div" color="primary">
          {drink.tea_range.name.toUpperCase()}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="secondary.light" sx={{fontWeight: 500}}>
          {drink.name}
        </Typography>
        <Typography variant="subtitle2" component="div" color="secondary.dark">
          {drink.flavour}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" sx={{borderColor: "secondary.dark"}} flexItem />} sx={{padding: "0 1rem", flexWrap: "wrap"}}>
      <Typography variant="body2" component="div" color="secondary.dark">
          {iceLevelDescription(drink.ice_level)}
        </Typography>
        <Typography variant="body2" component="div" color="secondary.dark">
          {sweetnessLevelDescription(drink.sweetness_level)}
        </Typography>
      </Stack>
      <CardActions sx={{justifyContent: "space-between"}}>
        <Button variant="outlined" size="small" onClick={handleEditDrinkClick} sx={{ backgroundColor: "primary", borderRadius: "1rem"}}>
          Edit
        </Button>
        <IconButton
          color="primary"
          onClick={handleDeleteDrinkClick}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}

export default DrinkCard;
