import { configureStore } from "@reduxjs/toolkit";
// import {userReducer} from '.users/userSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
// import { pokemonApi } from "./pokemon";

import { contactsApi } from "../redux/slices/contacts";

export const store = configureStore({
  reducer: {
    // users: userReducer,
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
