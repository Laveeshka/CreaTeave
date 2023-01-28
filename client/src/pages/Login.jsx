import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/userSlice";
import { StyledStack } from "../styled/StyledStack";
import { StyledButton } from "../styled/StyledButton";

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
    <StyledStack alignItems="center" justifyContent="flex-start" spacing={4} component="form" onSubmit={handleSubmit}>
      <Typography align="center" variant="h5" color="primary.main">
        Log Back To CreaTeave
      </Typography>
      <StyledStack sx={{ width: "100%" }} spacing={2}>
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
      </StyledStack>
     
      <StyledButton variant="contained" type="submit">
        Log In
      </StyledButton>
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
    </StyledStack>
  );
}

export default Login;
