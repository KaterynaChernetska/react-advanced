import {  RootState } from "../../redux/store";
export const selectLoadingTripById = (state:RootState) => state.tripByIdReducer.loading;
export const selectTrip = (state:RootState) => state.tripByIdReducer.trip;