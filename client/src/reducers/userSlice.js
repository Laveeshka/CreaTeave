import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const fetchMe = createAsyncThunk("user/fetchMe", () => {
//   // return a Promise containing the data we want
//   return fetch("/me")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// });

//refactor using async await
export const fetchMe = createAsyncThunk("user/fetchMe", 
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/me");
      const data = await res.json();
      //console.log(data);

      return data;
    }
    catch (err) {
      return rejectWithValue(err.message)
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Accepts": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      const data = await res.json();
      console.log("Data from login request is: ", data);
      return data;
    }
    catch (err) {
      return rejectWithValue(err.message)
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", 
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/logout", {
        method: "DELETE"
      });
      //const data = await res.json();
      //console.log("Data from logout request is: ", data);
      return "";
    }
    catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // user object is set to null initially
    errors: null, //array of errors from http request
    status: "idle", // loading state
  },
  reducers: {
    // catAdded(state, action) {
    //   // using createSlice lets us mutate state!
    //   state.entities.push(action.payload);
    // },
    // catUpdated(state, action) {
    //   const cat = state.entities.find((cat) => cat.id === action.payload.id);
    //   cat.url = action.payload.url;
    // },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchMe.pending](state) {
      state.status = "loading";
    },
    [fetchMe.fulfilled](state, action) {
      //action.payload will be an object
      //check if action.payload has an errors key
      //if yes, set state.errors to the value of errors key
      if (action.payload.errors) {
        state.errors = action.payload.errors[0]; //should evaluate to "Not authorized"
      } else {
        state.user = action.payload;
        state.errors = [];
      }
      state.status = "idle";
    },
    [fetchMe.rejected](state, action) {
      // returns error message from catch block
    console.log(action.payload) 
  },
    [loginUser.pending](state) {
      state.status = "loading";
  },
    [loginUser.fulfilled](state, action) {
      if (action.payload.errors) {
        state.errors = action.payload.errors[0];
      }
      else {
        state.user = action.payload;
        state.errors = [];

      }
      state.status = "idle";
    },
    [loginUser.rejected](state, action) {
      console.log(action.payload);
    },
    [logoutUser.pending](state) {
      state.status = "loading";
    },
    [logoutUser.fulfilled](state, action) {
      state.user = null;
      state.status = "idle";
    },
    [logoutUser.reject](state, action) {
      console.log(action.payload)
    }
    }
  },
);

//export const { userAdded } = usersSlice.actions;

export default userSlice.reducer;