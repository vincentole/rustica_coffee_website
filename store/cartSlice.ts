import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItemType from '../types/cartItemType';

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
        addOneToCart: (state, action: PayloadAction<CartItemType>) => {
            const item = state.items.find((item) => item.id === action.payload.id);

            if (item) item.amount += 1; 
            else state.items.push(action.payload);
        },

        
        removeOneFromCart: (state, action: PayloadAction<{id: string}>) => {
            const item = state.items.find(item => item.id === action.payload.id);

            if (item && item.amount > 1) item.amount -= 1;
            else state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        removeProduct: (state, action: PayloadAction<{id: string}>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }, 
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
