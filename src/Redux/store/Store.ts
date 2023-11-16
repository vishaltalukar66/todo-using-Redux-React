import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../states/TodoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

//Helps to export types of Store and reducer 
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;