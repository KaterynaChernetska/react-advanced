import {  RootState } from "../../redux/store";

export const selectLoading = (state:RootState) => state.trips.loading;
export const selectTrips = (state:RootState) => state.trips.trips;