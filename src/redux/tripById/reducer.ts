import { createReducer } from "@reduxjs/toolkit";
import { Trip } from "../../types/types";
import { getTrip } from "./operations";

interface TripReducerState {
  loading: boolean;
  trip: Trip;
}

const initialState: TripReducerState = {
  loading: false,
  trip: {
    id: "",
    title: "",
    description: "",
    level: "",
    duration: 0,
    price: 0,
    image: "",
    createdAt: "",
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getTrip.fulfilled, (state, action) => {
    state.trip = action.payload as Trip;
    state.loading = false;
  });

  builder.addCase(getTrip.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(getTrip.rejected, (state) => {
    state.loading = false;
  });
});

export { reducer as tripByIdReducer };
