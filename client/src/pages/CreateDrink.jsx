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
import { theme } from "../mui/theme";
import { flavoursObj } from "../constants/flavours";
import { iceLevelMarks } from "../constants/iceLevelMarks";
import { sweetnessLevelMarks } from "../constants/sweetnessLevelMarks";
import { postDrink } from "../reducers/drinksSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateDrink() {


  let user = useSelector((state) => state.user.user);
  let dispatch = useDispatch();
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
  const [teaRange, setTeaRange] = useState(teaRangeNames[0]);
  const [flavours, setFlavours] = useState(flavoursObj[teaRangeNames[0]]);
  const [flavour, setFlavour] = useState("");
  const [iceLevel, setIceLevel] = useState(100);
  const [sweetnessLevel, setSweetnessLevel] = useState(100);
  const [drinkName, setDrinkName] = useState("");
  let flavourMenuItems = flavours.map((flavour) => <MenuItem key={flavour} value={flavour}>{flavour}</MenuItem>)

  const errors = useSelector((state) => state.drinks.errors);

  const errorListItems = errors.map((error) => (
    <ListItem key={error} >{error}</ListItem>
  ));
  //if user does not exist (not logged in), re-direct the user to the login path
  //replace text by form creation
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

  const handleCreateDrinkSubmit = async (e) => {
    e.preventDefault();
    console.log("handleCreateDrinkSubmit was clicked");
    console.log("Drink details before post: ", {drinkName, teaRange, flavour, iceLevel, sweetnessLevel});
    const teaRangeObj = teaRanges.find((val) => val.name === teaRange)
    console.log(teaRangeObj)
    const newDrink = {name: drinkName, tea_range_id: teaRangeObj.id, flavour, ice_level: iceLevel, sweetness_level: sweetnessLevel};
    //dispatch(postDrink(newDrink));
    try {
      const result = await dispatch(postDrink(newDrink))
      //console.log("result is: ", result)
    if(result.payload.id){
      showToastMessage('Drink successfully created!');
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
    <Box>
      <Typography align="center">Time to start createa-ng!</Typography>
      <List>{errorListItems}</List>
      <Grid
        component="form"
        container
        spacing={2}
        onSubmit={handleCreateDrinkSubmit}
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
            Create drink
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
}

export default CreateDrink;
