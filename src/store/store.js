import { configureStore } from "@reduxjs/toolkit";
import CoinsReducer from "./slices/CoinsSlice";
import SelectedReducer from "./slices/SelectedSlice";

export const store = configureStore({
    reducer:{
        coins: CoinsReducer,
        selected: SelectedReducer
    }
})