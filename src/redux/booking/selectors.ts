import { createSelector } from '@reduxjs/toolkit';
import {  RootState } from "../../redux/store";
export const selectLoading = (state:RootState) => state.bookingReducer.loading;
export const selectBookings = (state:RootState) => state.bookingReducer.bookings;

export const selectSortedBookings = createSelector(
    selectBookings,
    (bookings) => {
      const sortedBookings = [...bookings].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      return sortedBookings;
    }
  );
