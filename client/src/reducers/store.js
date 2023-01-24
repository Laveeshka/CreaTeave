import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import drinksReducer from "./drinksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    drinks: drinksReducer
  },
});

export default store;