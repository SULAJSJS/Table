import { configureStore } from "@reduxjs/toolkit";
import chess from './slices/chessSlice';
import division from './slices/divisionSlice';


export const store = configureStore({
    reducer: {
        chess,
        division
    }
})