/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionTypes } from "../../enums/actionsTypes.enum";
import { errorHandler } from "../../helpers/errorHelper";
import { Trip } from "../../types/types";
import { getTrips } from "../../services/trips";
import { filterTrips } from "../../helpers/handleFilter";

interface TripsFilterState {
  search: string;
  duration: string;
  level: string;
}

export const getAllTrips = createAsyncThunk<Trip[] | void, TripsFilterState>(
    ActionTypes.GET_TRIPS,
    async (filters: TripsFilterState, { rejectWithValue }) => {
      try {
        const response = await getTrips();
        const filteredTrips = filterTrips(filters, response);
        return filteredTrips;
      } catch (error: any) {
        errorHandler(error.status);
        return rejectWithValue(error.status);
      }
    }
  );
  