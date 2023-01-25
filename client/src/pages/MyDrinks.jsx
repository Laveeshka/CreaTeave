import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getDrinks } from "../reducers/drinksSlice";

function MyDrinks() {

    let user = useSelector((state) => state.user.user);
    let dispatch = useDispatch();

    useEffect(() => {
            const fetchDrinks = async () => {
                 const result = await dispatch(getDrinks());
              }
              const fetchDrinksResult = fetchDrinks().catch(console.error);
        
    }, [])

    let drinks = useSelector((state) => state.drinks.drinksArray);
    console.log("User drinks are: ", drinks);
 

    if (!user) return <Navigate replace to="/login" />


    return (
        <Box>
            This is my drinks page! Wazza!!!
        </Box>
    )


  
}

export default MyDrinks;