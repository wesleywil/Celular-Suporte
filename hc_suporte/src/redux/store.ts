import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin/admin";
import accountReducer from "./account/account";
import clientReducer from "./client/client";

export const store = configureStore({
    reducer:{
        admin:adminReducer,
        account:accountReducer,
        client:clientReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;