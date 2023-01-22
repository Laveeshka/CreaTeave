import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/userSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  let errors = useSelector((state) => state.user.errors);

  const handleGoToSignUpClick = () => {
    console.log("go to sign up");
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Firing up the login request");
    const credentials = { username, password };

    try {
      const resultAction = await dispatch(loginUser(credentials)).unwrap();
      console.log("resultAction is: ", resultAction);
      if (!resultAction.errors) {
        setUsername("");
        setPassword("");
        navigate("/home");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Stack component="form" onSubmit={handleSubmit}>
      <Typography align="center" variant="subtitle1">
        Log Back To CreaTeave
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
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
      <Button
        variant="text"
        sx={{ textDecoration: "underline" }}
        onClick={handleGoToSignUpClick}
      >
        Don't have an account? Sign up now
      </Button>
      {errors === "Invalid password or username" ? (
        <Typography align="center" variant="caption" color="error">
          {errors}
        </Typography>
      ) : null}
    </Stack>
  );
}

export default Login;
