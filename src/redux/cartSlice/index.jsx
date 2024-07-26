import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:'cart',
    initialState:{
    items: [],
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload;
            state.items.push(newItem)
        },
        clearCart:(state)=>{
            state.items=[]
        },
        deleteUser:(state,action)=>{
state.items.splice(action.payload,1)
        }
    }
})
export default CartSlice
export const selectCartItem=(state)=>state.cart.items
export const deleteCartItem=(state)=>state.cart
export const{addToCart,clearCart,deleteUser}=CartSlice.actions