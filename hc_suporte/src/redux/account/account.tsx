import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  user_id: string;
}

const initialState: AccountState = {
  user_id: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    set_user_id: (state, { payload }) => {
      state.user_id = payload;
    },
  },
});

export const { set_user_id } = accountSlice.actions;

export default accountSlice.reducer;
