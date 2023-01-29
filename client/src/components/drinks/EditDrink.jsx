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
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../../mui/theme";
import { flavoursObj } from "../../constants/flavours";
import { iceLevelMarks } from "../../constants/iceLevelMarks";
import { sweetnessLevelMarks } from "../../constants/sweetnessLevelMarks";
import { useParams } from "react-router-dom";
import { updateDrink } from "../../reducers/drinksSlice";
import { StyledStack } from "../../styled/StyledStack";
import { StyledButton } from "../../styled/StyledButton";
import { StyledSlider } from "../../styled/StyledSlider";
import { StyledInputLabel } from "../../styled/StyledSelect";
import { StyledSelect } from "../../styled/StyledSelect";
import { StyledMenuItem } from "../../styled/StyledSelect";
import { StyledTextField } from "../../styled/StyledTextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditDrink() {

    const { id } = useParams();
    const drinks = useSelector((state) => state.drinks.drinksArray);
    const drink = drinks.find((drink) => drink.id == id);
    console.log("drink is: ", drink)

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const flavourMenuItems = flavours.map((flavour) => <StyledMenuItem key={flavour} value={flavour}>{flavour}</StyledMenuItem>)

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
  const showToastMessage = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.BOTTOM_CENTER
    })}

  const handleUpdateDrinkSubmit = async (e) => {
    e.preventDefault();
    console.log("handleUpdateDrinkSubmit was clicked");
    const teaRangeObj = teaRanges.find((val) => val.name === teaRange)
    const updatedDrink = {id: drink.id, name: drinkName, tea_range_id: teaRangeObj.id, flavour, ice_level: iceLevel, sweetness_level: sweetnessLevel};
    console.log("Drink details before patch: ", updatedDrink);

    try {
        const result = await dispatch(updateDrink(updatedDrink))
        console.log("result is: ", result)
      if(result.payload.id){
        showToastMessage('Drink successfully edited!');
        setTimeout(() => navigate("/my-drinks"), 3000);
      } else {
        toast.error('An error occured!', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }}
    catch(err){
        console.warn(err)
    }
  };


  return (
    <StyledStack>
    <Typography align="center" variant="h5" color="primary.main">Time to start createa-ng!</Typography>
    <List>{errorListItems}</List>
    <Grid
      component="form"
      container
      spacing={2}
      onSubmit={handleUpdateDrinkSubmit}
    >
      <Grid item xs={12} md={6}>
        <Card sx={{backgroundColor: theme.palette.secondary.dark, color: "secondary.light"}} >
          <CardContent>
            <Typography variant="subtitle1" component="span" color="primary.main">
              Step 1{")"}{" "}
            </Typography>
            <Typography variant="h6" component="span">
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
        <Card sx={{backgroundColor: theme.palette.secondary.dark, color: "secondary.light"}} >
          <CardContent>
            <Typography variant="subtitle1" component="span" color="primary.main">
              Step 2{")"}{" "}
            </Typography>
            <Typography variant="h6" component="span">
              {" "}
              Choose flavour
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl fullWidth variant="filled">
              <StyledInputLabel id="demo-simple-select-label" >Flavour</StyledInputLabel>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={flavour}
                label="flavour"
                onChange={(e) => setFlavour(e.target.value)}
              >
                {flavourMenuItems}
              </StyledSelect>
            </FormControl>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{backgroundColor: theme.palette.secondary.dark, color: "secondary.light"}}>
          <CardContent>
          <Typography variant="subtitle1" component="span" color="primary.main">
              Step 3{")"}{" "}
            </Typography>
            <Typography variant="h6" component="span">
              {" "}
              Choose ice level
            </Typography>
          </CardContent>
          <CardActions >
              <FormControl sx={{width: "80%", margin: "auto"}}>
                <StyledSlider
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
        <Card sx={{backgroundColor: theme.palette.secondary.dark, color: "secondary.light"}}>
          <CardContent>
          <Typography variant="subtitle1" component="span" color="primary.main">
              Step 4{")"}{" "}
            </Typography>
            <Typography variant="h6" component="span" >
              {" "}
              Choose sweetness level
            </Typography>
          </CardContent>
          <CardActions>
          <FormControl sx={{width: "80%", margin: "auto"}}>
            <StyledSlider 
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
        <Card sx={{backgroundColor: theme.palette.secondary.dark, color: "secondary.light"}}>
          <CardContent>
          <Typography variant="subtitle1" component="span" color="primary.main">
              Step 5{")"}{" "}
            </Typography>
            <Typography variant="h6" component="span">
              {" "}
              Name your drink
            </Typography>
          </CardContent>
          <CardActions>
              <StyledTextField 
              fullWidth
              color="secondary"
              required
              id="filled-name"
              label="Name"
              value={drinkName}
              onChange={(e) => setDrinkName(e.currentTarget.value)}
              />
          </CardActions>
        </Card>
      </Grid>
      <Grid container justifyContent="center" item xs={12}>
        <StyledButton
          item={+true}
          type="submit"
          name="create-drink-btn"
          variant="contained"
          sx={{ width: "100%" }}
        >
          Edit Drink
        </StyledButton>
      </Grid>
    </Grid>
    <ToastContainer />
  </StyledStack>
  );
}

export default EditDrink;
