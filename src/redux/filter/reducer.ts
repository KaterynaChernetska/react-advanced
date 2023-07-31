import { createReducer } from "@reduxjs/toolkit";
import { updateFilter } from "./operation";

interface TripsFilterState {
  search: string;
  duration: string;
  level: string;
}

const initialState: TripsFilterState = {
  search: "",
  duration: "",
  level: "",
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateFilter, (state, action) => {
    const { name, value } = action.payload;
    state[name as keyof TripsFilterState] = value;
  });
});

export { reducer as filter };
