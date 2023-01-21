import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { Navigate } from "react-router-dom";

function CreateDrink() {

    let user = useSelector((state) => state.user.user);
    //if user does not exist (not logged in), re-direct the user to the login path
    //replace text by form creation
    if (!user) return <Navigate replace to="/login" />;
    return (
        <Box>
            This is where I create bubble tea drinks! Double wazza??
        </Box>
    )
}

export default CreateDrink;