import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  user_id: string;
  admin: string;
}

const initialState: AccountState = {
  user_id: "",
  admin: "idle" || "false" || "true",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    set_user_id: (state, { payload }) => {
      state.user_id = payload;
    },
    clean_user_id: (state) => {
      state.user_id = "";
    },
    set_admin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

export const { set_user_id, clean_user_id, set_admin } = accountSlice.actions;

export default accountSlice.reducer;
