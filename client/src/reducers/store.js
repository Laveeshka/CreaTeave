import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import userReducer from "./userSlice";
import drinksReducer from "./drinksSlice";

const persistConfig = {
  key: 'root',
  storage,
}

// const rootReducer = combineReducers({ 
//   user: userReducer,
//   drinks: drinksReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer
// })

const persistedUserReducer = persistReducer(persistConfig, userReducer)
const persistedDrinksReducer = persistReducer(persistConfig, drinksReducer)


export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    drinks: persistedDrinksReducer,
    middleware: [thunk]
  },
});

export const persistor = persistStore(store)
