import { createSlice } from "@reduxjs/toolkit";

export interface ClientState {
  problem_details_hidden: boolean;
}

const initialState: ClientState = {
  problem_details_hidden: true,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    switch_problem_details_view: (state) => {
      state.problem_details_hidden = !state.problem_details_hidden;
    },
  },
});

export const { switch_problem_details_view } = clientSlice.actions;

export default clientSlice.reducer;
