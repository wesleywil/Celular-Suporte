import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin/admin";
import accountReducer from "./account/account";

export const store = configureStore({
    reducer:{
        admin:adminReducer,
        account:accountReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;