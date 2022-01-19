import { createSlice } from "@reduxjs/toolkit";

type UiStateType = {
    cartShown: boolean;
}

const initialState: UiStateType = {
    cartShown: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openCart: (state) => {state.cartShown = true},
        closeCart: (state) => {state.cartShown = false},
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;