import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  return (
    <Stack component="form" noValidate autoComplete="off">
        Log me in at this very moment
    </Stack>
  )
}

export default Login;
