import { createReducer } from "@reduxjs/toolkit";
// import { Booking } from "../../interface/components/Booking.interface";
// import { BookingsState } from "../../interface/store/reducer.interface";
// import { fetchBookings, createNewBooking, removeBooking } from "./actions";

import { Booking } from "../../types/types";
import { getAllBookings, createNewBooking, removeBookingById } from "./operstions";


interface BookingsState {
    loading: boolean;
    bookings: Booking[];
  }

const initialState: BookingsState = {
  loading: false,
  bookings: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllBookings.fulfilled, (state, action) => {
    state.bookings = action.payload as Booking[];
    state.loading = false;
  });

  builder.addCase(getAllBookings.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(createNewBooking.fulfilled, (state, action) => {
    state.bookings.push(action.payload as Booking);
  });

  builder.addCase(removeBookingById.fulfilled, (state, action) => {
    state.bookings = action.payload as Booking[];
  });
});

export { reducer as bookingReducer };
