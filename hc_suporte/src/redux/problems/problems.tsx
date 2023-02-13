import { createSlice } from "@reduxjs/toolkit";

interface Problem {
  cellphone: string;
  created_at: string;
  problem: string;
  status: string;
  uid: string;
}

export interface ProblemsState {
  selected_problem?: Problem;
  selected_problems?: Array<Problem>;
  open_problems?: Array<Problem>;
  inProgress_problems?: Array<Problem>;
  closed_problems?: Array<Problem>;
  denied_problems?: Array<Problem>;
}

const initialState: ProblemsState = {
  selected_problem: {
    cellphone: "",
    created_at: "",
    problem: "",
    status: "",
    uid: "",
  },
  selected_problems: [],
  open_problems: [],
  inProgress_problems: [],
  closed_problems: [],
  denied_problems: [],
};

export const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    set_selected_problem: (state, { payload }) => {
      state.selected_problem = payload;
    },
    set_selected_problems: (state, { payload }) => {
      state.selected_problems = payload;
    },
    set_open_problems: (state, { payload }) => {
      state.open_problems = payload;
    },
    set_inProgress_problems: (state, { payload }) => {
      state.inProgress_problems = payload;
    },
    set_closed_problems: (state, { payload }) => {
      state.closed_problems = payload;
    },
    set_denied_problems: (state, { payload }) => {
      state.denied_problems = payload;
    },
  },
});

export const {
  set_selected_problem,
  set_selected_problems,
  set_open_problems,
  set_inProgress_problems,
  set_closed_problems,
  set_denied_problems,
} = problemsSlice.actions;

export default problemsSlice.reducer;
