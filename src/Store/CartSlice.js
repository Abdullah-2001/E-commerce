import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            console.log(state.cart.findIndex(v => v));
            console.log(state.cart);
            console.log(payload.id);
        },
        removeFromCart: (state, { payload }) => {
            const itemIndex = state.cart.findIndex(v => v.id === payload.id)
            state.cart.splice(itemIndex, 1)
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;