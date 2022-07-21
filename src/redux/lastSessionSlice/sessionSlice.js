import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "typeSession",
  initialState: {
    typeSession: "",
  },
  reducers: {
    changeTypeSession: (state, action) => {
      state.typeSession = action.payload;
    },
  },
});

export const { changeTypeSession } = sessionSlice.actions;
