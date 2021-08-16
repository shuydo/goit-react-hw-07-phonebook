import { configureStore } from "@reduxjs/toolkit";
// import {userReducer} from '.users/userSlice'
import {setupListeners} from '@reduxjs/toolkit/query'
import { pokemonApi } from "./pokemon";

export const store = configureStore({
  reducer: {
    // users: userReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
  ],
});

setupListeners(store.dispatch);
