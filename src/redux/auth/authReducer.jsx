
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({name:'auth_reducer',initialState:{
    user_id:null,
    is_authenticated:null,
    user_role:null
},
reducers:{
setUserDetail:(state,action)=>{
    state.user_id=action.payload.user_id;
    state.is_authenticated = action.payload.is_authenticated;
    state.user_role = action.payload.user_role;
}
}}); 

export const {setUserDetail} = authSlice.actions;
export default authSlice.reducer;