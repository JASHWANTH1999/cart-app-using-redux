import { createSlice } from "@reduxjs/toolkit";

const initialcart={value:false}
const Carthide=createSlice({
    name:"hide",
    initialState:{initialcart},
    reducers:{
        hidecartstate(state){
            state.value=!state.value;
        }
    }
})
export const hideActions =Carthide.actions;
export default Carthide.reducer;