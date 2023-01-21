import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { Navigate } from "react-router-dom";

function MyDrinks() {

    let user = useSelector((state) => state.user.user);
    if (!user) return <Navigate replace to="/login" />

    return (
        <Box>
            This is my drinks page! Wazza!!!
        </Box>
    )
}

export default MyDrinks;