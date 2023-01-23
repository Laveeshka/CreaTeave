import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//action for getting all drinks associated with the logged in user
export const getDrinks = createAsyncThunk("drinks/getDrinks",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("/drinks");
            const data = await res.json();
            console.log("data from fetch drinks request is: ", data);
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
            console.log("data from get toppings request is: ", data);
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
            console.log("data from get tea ranges request is: ", data);
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
            console.log("data from fetch drinks request is: ", data)
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
            console.log(action.payload)
        }
    }
});

export default drinksSlice.reducer;