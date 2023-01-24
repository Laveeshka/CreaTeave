import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function RadioGroupTeaRange() {
  const toppings = useSelector((state) => state.drinks.teaRanges);
  const toppingNames = toppings.map((topping) => topping.name);
  const formControlLabels = toppingNames.map((toppingName) => (
    <FormControlLabel
      key={toppingName}
      value={toppingName}
      control={<Radio />}
      label={toppingName}
    />
  ));

  //use state here
  const [teaRange, setTeaRange] = useState("Fruity");
}
