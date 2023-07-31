import { createReducer } from "@reduxjs/toolkit";
import { getAllTrips } from "./operations";
import { Trip } from "../../types/types";

interface TripsState {
  trips: Trip[];
  loading: boolean;
}

const initialState: TripsState = {
  trips: [],
  loading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllTrips.fulfilled, (state, action) => {
    state.trips = action.payload as Trip[];
    state.loading = false;
  });

  builder.addCase(getAllTrips.pending, (state) => {
    state.loading = true;
  });
});

export { reducer as tripsReducer };
