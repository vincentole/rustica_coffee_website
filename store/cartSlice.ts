import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItemType from "../types/cartItemType";

type CartStateType = {
    items: CartItemType[];
};

const initialState: CartStateType = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            state.items.push(action.payload);
        },
    },
});


export const cartActions =  cartSlice.actions;
export default cartSlice;