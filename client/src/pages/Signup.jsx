import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../reducers/userSlice";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  let dispatch = useDispatch();
  let signupErrors = useSelector((state) => state.user.signupErrors);

  let errorListItems = signupErrors.map((error) => (
    <ListItem key={error}>{error}</ListItem>
  ));

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    try {
      const resultAction = await dispatch(signupUser(credentials)).unwrap();
      if (!resultAction.errors) {
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
        navigate("/home");
      }
    } catch (err) {}

    // dispatch(signupUser(credentials));
    //     setUsername("");
    //     setPassword("");
    //     setPasswordConfirmation("");
    //     navigate("/home");
  };

  return (
    <Stack component="form" onSubmit={handleSubmitSignUp}>
      <Typography align="center" variant="subtitle1">
        Create an account with CreaTeave
      </Typography>
      <TextField
        required
        variant="outlined"
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        variant="outlined"
        id="password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        required
        variant="outlined"
        id="password-confirmation-input"
        label="Confirm Password"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
      <List>{errorListItems}</List>
    </Stack>
  );
}

export default Signup;
