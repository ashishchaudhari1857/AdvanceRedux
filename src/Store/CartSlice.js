import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    isShow:false,
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        showCart:(state)=>{
            state.isShow=!state.isShow
        }
    }
})


export const Cartactions =CartSlice.actions;
 export  default CartSlice.reducer;
