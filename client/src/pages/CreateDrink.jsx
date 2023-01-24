import { useSelector } from "react-redux";
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
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../mui/theme";
import { flavoursObj } from "../constants/flavours";

function CreateDrink() {


  let user = useSelector((state) => state.user.user);
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
  let flavourMenuItems = flavours.map((flavour) => <MenuItem key={flavour} value={flavour}>{flavour}</MenuItem>)


  //if user does not exist (not logged in), re-direct the user to the login path
  //replace text by form creation
  if (!user) return <Navigate replace to="/login" />;

  const handleCreateDrinkSubmit = (e) => {
    e.preventDefault();
    console.log("handleCreateDrinkSubmit was clicked");
  };

  return (
    <Box>
      <Typography align="center">Time to start createa-ng!</Typography>
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
        <Grid item xs={6} md={12}>
          <Card variant="outlined">
            <CardContent></CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={12}>
          <Card variant="outlined">
            <CardContent></CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent></CardContent>
            <CardActions></CardActions>
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
    </Box>
  );
}

export default CreateDrink;
