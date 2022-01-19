import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import uiSlice from './uiSlice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
