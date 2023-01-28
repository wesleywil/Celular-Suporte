import { createSlice } from "@reduxjs/toolkit";

export interface AdminState {
  client_list_hidden: boolean;
}

const initialState: AdminState = {
  client_list_hidden: true,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    switch_client_list_view: (state) => {
      state.client_list_hidden = !state.client_list_hidden;
    },
  },
});

export const { switch_client_list_view } = adminSlice.actions;

export default adminSlice.reducer;
