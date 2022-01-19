import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItemType from '../types/cartItemType';

type CartStateType = {
    items: CartItemType[];
    seenItemsAmount: number;
    cartShown: boolean;
};

const initialState: CartStateType = {
    items: [],
    seenItemsAmount: 0,
    cartShown: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOneToCart: (state, action: PayloadAction<CartItemType>) => {
            const item = state.items.find((item) => item.id === action.payload.id);

            if (item) item.amount += 1;
            else state.items.push(action.payload);

            if (state.cartShown) {
                state.seenItemsAmount =
                    state.items.reduce((total, item) => total + item.amount, 0) - 1;
            }
        },

        removeOneFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find((item) => item.id === action.payload.id);

            if (item && item.amount > 1) item.amount -= 1;
            else state.items = state.items.filter((item) => item.id !== action.payload.id);

            if (state.cartShown) {
                state.seenItemsAmount =
                    state.items.reduce((total, item) => total + item.amount, 0) + 1;
            }
        },
        removeProduct: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },

        openCart: (state) => {
            state.cartShown = true;
        },

        closeCart: (state) => {
            state.cartShown = false;
            state.seenItemsAmount = state.items.reduce((total, item) => total + item.amount, 0);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
