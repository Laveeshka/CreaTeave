import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../../mui/theme";
import { flavoursObj } from "../../constants/flavours";
import { iceLevelMarks } from "../../constants/iceLevelMarks";
import { sweetnessLevelMarks } from "../../constants/sweetnessLevelMarks";
import { useParams } from "react-router-dom";
import { updateDrink } from "../../reducers/drinksSlice";
function EditDrink() {

    const { id } = useParams();
    const drinks = useSelector((state) => state.drinks.drinksArray);
    const drink = drinks.find((drink) => drink.id == id);
    console.log("drink is: ", drink)

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const teaRanges = useSelector((state) => state.drinks.teaRanges);
  const teaRangeNames = teaRanges.map((teaRange) => teaRange.name);
  const formControlLabels = teaRangeNames.map((teaRangeName) => (
    <FormControlLabel
      key={teaRangeName}
      value={teaRangeName}
      control={<Radio />}
      label={teaRangeName}
    />
  ));

  
  //use state here
  const [teaRange, setTeaRange] = useState(drink.tea_range.name);
  const [flavours, setFlavours] = useState(flavoursObj[teaRange]);
  const [flavour, setFlavour] = useState(drink.flavour);
  const [iceLevel, setIceLevel] = useState(drink.ice_level);
  const [sweetnessLevel, setSweetnessLevel] = useState(drink.sweetness_level);
  const [drinkName, setDrinkName] = useState(drink.name);
  const flavourMenuItems = flavours.map((flavour) => <MenuItem key={flavour} value={flavour}>{flavour}</MenuItem>)

  const errors = useSelector((state) => state.drinks.errors);

  const errorListItems = errors.map((error) => (
    <ListItem key={error} >{error}</ListItem>
  ));
  
  if (!user) return <Navigate replace to="/login" />;

  function iceValueLabelFormat(value) {
    return iceLevelMarks.findIndex((mark) => mark.value === value) + 1;
  }

  function sweetnessValueLabelFormat(value) {
    return sweetnessLevelMarks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleUpdateDrinkSubmit = (e) => {
    e.preventDefault();
    console.log("handleUpdateDrinkSubmit was clicked");
    const teaRangeObj = teaRanges.find((val) => val.name === teaRange)
    //console.log(teaRangeObj)
    const updatedDrink = {id: drink.id, name: drinkName, tea_range_id: teaRangeObj.id, flavour, ice_level: iceLevel, sweetness_level: sweetnessLevel};
    console.log("Drink details before patch: ", updatedDrink);

    try {
        dispatch(updateDrink(updatedDrink))
    }
    catch(err){
        console.warn(err)
    }
  };


  return (
    <Box>
      <Typography align="center">Time to start createa-ng!</Typography>
      <List>{errorListItems}</List>
      <Grid
        component="form"
        container
        spacing={2}
        onSubmit={handleUpdateDrinkSubmit}
      >
        <Grid item xs={12} md={6}>
          <Card sx={{backgroundColor: theme.palette.secondary.dark}} >
            <CardContent>
              <Typography variant="subtitle2" component="span">
                Step 1{")"}{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {" "}
                Choose type
              </Typography>
            </CardContent>
            <CardActions>
              <FormControl>
                <RadioGroup
                  name="controlled-tea-range-radio-group"
                  value={teaRange}
                  onChange={(e) => {setTeaRange(e.target.value)
                setFlavours(flavoursObj[`${e.target.value}`])}}
                >
                  {formControlLabels}
                </RadioGroup>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{backgroundColor: theme.palette.secondary.dark}} >
            <CardContent>
              <Typography variant="subtitle2" component="span">
                Step 2{")"}{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {" "}
                Choose flavour
              </Typography>
            </CardContent>
            <CardActions>
              <FormControl fullWidth variant="filled">
                <InputLabel id="demo-simple-select-label" sx={{color: theme.palette.secondary.main}}>Flavour</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={flavour}
                  label="flavour"
                  onChange={(e) => setFlavour(e.target.value)}
                >
                  {flavourMenuItems}
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{backgroundColor: theme.palette.secondary.dark}}>
            <CardContent>
            <Typography variant="subtitle2" component="span">
                Step 3{")"}{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {" "}
                Choose ice level
              </Typography>
            </CardContent>
            <CardActions >
                <FormControl sx={{width: "80%", margin: "auto"}}>
                <Slider 
                        value={iceLevel}
                        onChange={(e, newVal) => setIceLevel(newVal)}
                        valueLabelFormat={iceValueLabelFormat}
                        step={null}
                        marks={iceLevelMarks}
                    />
                </FormControl>            
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{backgroundColor: theme.palette.secondary.dark}}>
            <CardContent>
            <Typography variant="subtitle2" component="span">
                Step 4{")"}{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {" "}
                Choose sweetness level
              </Typography>
            </CardContent>
            <CardActions>
            <FormControl sx={{width: "80%", margin: "auto"}}>
                <Slider 
                        value={sweetnessLevel}
                        onChange={(e, newVal) => setSweetnessLevel(newVal)}
                        valueLabelFormat={sweetnessValueLabelFormat}
                        step={null}
                        marks={sweetnessLevelMarks}
                    />
                </FormControl>    
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{backgroundColor: theme.palette.secondary.dark}}>
            <CardContent>
            <Typography variant="subtitle2" component="span">
                Step 5{")"}{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {" "}
                Name your drink
              </Typography>
            </CardContent>
            <CardActions>
                <TextField 
                fullWidth
                required
                id="filled-name"
                label="Name"
                value={drinkName}
                onChange={(e) => setDrinkName(e.target.value)}
                />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            name="create-drink-btn"
            variant="contained"
            sx={{ width: "100%" }}
          >
            Edit Drink
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditDrink;
