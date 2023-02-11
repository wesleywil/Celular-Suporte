import { createSlice } from "@reduxjs/toolkit";
import { AccountState } from "../account/account";

export interface AdminState {
  client_list_hidden: boolean;
  service_info_hidden: boolean;
  client_info_hidden: boolean;
  user_selected: AccountState;
}

const initialState: AdminState = {
  client_list_hidden: true,
  service_info_hidden: true,
  client_info_hidden: true,
  user_selected: {
    address: "",
    admin: "idle" || "false" || "true",
    cellphone: "",
    city: "",
    displayName: "",
    district: "",
    email: "",
    state: "",
    zip_code: "",
    uid: "idle" || "",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    switch_client_list_view: (state) => {
      state.client_list_hidden = !state.client_list_hidden;
    },
    switch_service_info_view: (state) => {
      state.service_info_hidden = !state.service_info_hidden;
    },
    switch_client_info_view: (state) => {
      state.client_info_hidden = !state.client_info_hidden;
    },
    set_user: (state, { payload }) => {
      state.client_info_hidden = !state.client_info_hidden;
      state.user_selected = payload;
    },
  },
});

export const {
  switch_client_list_view,
  switch_service_info_view,
  switch_client_info_view,
  set_user,
} = adminSlice.actions;

export default adminSlice.reducer;
