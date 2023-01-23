import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import drinksReduxer from "./drinksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    drinks: drinksReduxer
  },
});

export default store;