import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  address: string;
  admin: string;
  cellphone: string;
  city: string;
  displayName: string;
  district: string;
  email: string;
  state: string;
  zip_code: string;
  uid: string;
}

const initialState: AccountState = {
  address: "",
  admin: "idle" || "false" || "true",
  cellphone: "",
  city: "",
  displayName: "",
  district: "",
  email: "",
  state: "",
  zip_code: "",
  uid: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    set_user_id: (state, { payload }) => {
      state.uid = payload;
    },
    clean_user: () => {
      return {
        ...initialState,
      };
    },
    set_user: (state, { payload }) => {
      return {
        ...(state = payload),
      };
    },
    set_admin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

export const { set_user_id, clean_user, set_user, set_admin } =
  accountSlice.actions;

export default accountSlice.reducer;
