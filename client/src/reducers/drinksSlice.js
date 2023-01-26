import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//action for getting all drinks associated with the logged in user
export const getDrinks = createAsyncThunk("drinks/getDrinks",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("/drinks");
            const data = await res.json();
            console.log("data from GET drinks request is: ", data);
            return data;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getToppings = createAsyncThunk("drinks/getToppings",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("/toppings");
            const data = await res.json();
            console.log("data from GET toppings request is: ", data);
            return data;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getTeaRanges = createAsyncThunk("drinks/getTeaRanges",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("/tea_ranges");
            const data = await res.json();
            console.log("data from GET tea ranges request is: ", data);
            return data;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

//action for creating a drink for the logged in user
export const postDrink = createAsyncThunk("drinks/postDrink",
    async (newDrink, { rejectWithValue }) => {
        try {
            const res = await fetch("/drinks", {
                method: "POST",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newDrink)
            })
            const data = await res.json();
            console.log("data from POST drinks request is: ", data)
            return data;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const deleteDrink = createAsyncThunk("drinks/deleteDrink", 
    async (drink, { rejectWithValue }) => {
        try {
            await fetch(`/drinks/${drink.id}`, {
                method: "DELETE"
            })
            console.log("DELETE request fired");
            return drink;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

//action for updating a drink for the logged in user
export const updateDrink = createAsyncThunk("drinks/updateDrink",
    async (updatedDrink, { rejectWithValue }) => {
        try {
            const res = await fetch(`/drinks/${updatedDrink.id}`, {
                method: "PATCH",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedDrink)
            })
            const data = await res.json();
            console.log("data from patch drinks request is: ", data)
            return data;
        }
        catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

//the drinksArray state will hold all the drinks belonging to the logged in user
const drinksSlice = createSlice({
    name: "drinks",
    initialState: {
        drinksArray: [],
        newDrink: null,
        status: "idle",
        errors: [],
        toppings: [],
        teaRanges: []
    },
    reducers: {

    },
    extraReducers: {
        [getToppings.pending](state){
            state.status = "loading"
        },
        [getToppings.fulfilled](state, action){
            if (action.payload.errors) {
                state.errors = action.payload.errors;
              } else {
                state.toppings = action.payload;
                state.errors = [];
              }
              state.status = "idle";
        },
        [getToppings.rejected](state, action){
            console.log(action.payload)
        },
        [getTeaRanges.pending](state){
            state.status = "loading"
        },
        [getTeaRanges.fulfilled](state, action){
            if (action.payload.errors) {
                state.errors = action.payload.errors;
              } else {
                state.teaRanges = action.payload;
                state.errors = [];
              }
              state.status = "idle";
        },
        [getTeaRanges.rejected](state, action){
            console.log(action.payload);
            state.status = "idle";
        },
        [postDrink.pending](state){
            state.newDrink = null;
            state.status = "loading"
        },
        [postDrink.fulfilled](state, action){
            if (action.payload.errors) {
                state.errors = action.payload.errors;
            } else {
                state.newDrink = null;
                // state.newDrink = action.payload;
                // console.log("New drink is: ", state.newDrink)
                state.errors = [];
            }
            state.status = "idle"
        },
        [postDrink.rejected](state, action){
            console.log(action.payload);
            state.status = "idle";
        },
        [getDrinks.pending](state){
            //state.drinksArray = [];
            state.status = "loading"
        },
        [getDrinks.fulfilled](state, action){
            if (action.payload.errors) {
                state.errors = action.payload.errors;
            } else {
                state.drinksArray = action.payload;
                state.errors = [];
            }
            state.status = "idle";
        },
        [getDrinks.rejected](state, action){
            console.log(action.payload);
            state.status = "idle";
        },
        [deleteDrink.pending](state){
            state.status = "loading";
        },
        [deleteDrink.fulfilled](state, action){
            console.log("action payload is: ", action.payload)
            const index = state.drinksArray.findIndex((drink) => drink === action.payload.id);
            state.drinksArray.splice(index, 1);
            //state.drinksArray = state.drinksArray.filter(drink => drink !== action.payload);
            state.status = "idle";
        },
        [deleteDrink.rejected](state, action){
            console.log(action.payload);
            state.status = "idle";
        },
        [updateDrink.pending](state){
            state.status = "loading"
        },
        [updateDrink.fulfilled](state, action){
            if (action.payload.errors) {
                state.errors = action.payload.errors;
            } else {
                state.errors = [];
                state.drinksArray = state.drinksArray.map((drink) => {
                    if (drink.id === action.payload.id ){
                        return action.payload
                    } else {
                        return drink;
                    }
                })
            }
            state.status = "idle"
        },
        [updateDrink.rejected](state, action){
            console.log(action.payload);
            state.status = "idle";
        }
        
    }
});

export default drinksSlice.reducer;