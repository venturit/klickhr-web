import { configureStore } from "@reduxjs/toolkit";

//Slices
import authReducer from "./auth/authReducer";
import { sessionSlice } from "./lastSessionSlice/sessionSlice";

export const store = configureStore({
  reducer: { auth_data: authReducer, typeSession: sessionSlice.reducer },
});
