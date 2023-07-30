
import { createReducer } from "@reduxjs/toolkit";
import { TripsFilterState } from "../../types/filter";
import { updateFilter } from "./operation";

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

export { reducer as filter};