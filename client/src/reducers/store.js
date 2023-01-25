import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import userReducer from "./userSlice";
import drinksReducer from "./drinksSlice";

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({ 
  user: userReducer,
  drinks: drinksReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})


export const persistor = persistStore(store)
