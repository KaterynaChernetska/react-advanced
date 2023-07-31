/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Trip } from "../../types/types";
import { getTripById } from "../../services/trips";
import { errorHandler } from "../../helpers/errorHelper";
import { ActionTypes } from "../../enums/actionsTypes.enum";

export const getTrip = createAsyncThunk<Trip | void, string>(
  ActionTypes.GET_TRIP_BY_ID,
  async (id: string) => {
    try {
      const trip = await getTripById(id);
      return trip;
    } catch (error: any) {
      errorHandler(error.status);
    }
  }
);
