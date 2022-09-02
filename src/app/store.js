import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../services/post";
import voiceSearchReducer from "../../src/services/voiceSearchSlice";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    voiceSearch: voiceSearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
