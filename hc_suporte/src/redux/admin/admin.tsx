import { createSlice } from "@reduxjs/toolkit";

export interface AdminState {
  client_list_hidden: boolean;
  service_info_hidden: boolean;
  client_info_hidden: boolean;
}

const initialState: AdminState = {
  client_list_hidden: true,
  service_info_hidden: true,
  client_info_hidden: true,
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
  },
});

export const {
  switch_client_list_view,
  switch_service_info_view,
  switch_client_info_view,
} = adminSlice.actions;

export default adminSlice.reducer;
