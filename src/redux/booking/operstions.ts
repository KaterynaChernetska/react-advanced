/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionTypes } from "../../enums/actionsTypes.enum";
import { errorHandler } from "../../helpers/errorHelper";
import {
  createBooking,
  getBookings,
  removeBooking,
} from "../../services/bookings";
import { Booking } from "../../types/types";
import Notiflix from "notiflix";
import { RootState } from "../store";

interface NewBooking {
  userId: string;
  tripId: string;
  guests: string;
  date: string;
}

export const getAllBookings = createAsyncThunk<Booking[] | void, void>(
  ActionTypes.GET_ALL_BOOKINGS,
  async () => {
    try {
      const bookings = await getBookings();
      return bookings;
    } catch (error: any) {
      errorHandler(error.status);
    }
  }
);

export const createNewBooking = createAsyncThunk<Booking | void, NewBooking>(
  ActionTypes.CREATE_BOOKING,
  async ({ tripId, guests, date, userId }) => {
    try {
      const booking = await createBooking({
        tripId,
        guests,
        date,
        userId,
      });

      Notiflix.Notify.success("You've booked new trip!");
      return booking;
    } catch (error: any) {
      errorHandler(error.status);
    }
  }
);

export const removeBookingById = createAsyncThunk<
  Booking[] | void,
  string,
  {
    state: RootState;
  }
>(ActionTypes.DELETE_BOOKING_BY_ID, async (bookingId: string, { getState }) => {
  try {
    await removeBooking(bookingId);

    const state = getState();

    const { bookings } = state.bookingReducer;

    const filteredBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );
    Notiflix.Notify.success("Your booking deleted!");

    return filteredBookings;
  } catch (error: any) {
    errorHandler(error.status);
  }
});
