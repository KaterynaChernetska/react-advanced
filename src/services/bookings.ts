import { ApiMethods } from "../enums/api.enums";
import { Enpoint } from "../enums/endpoinds";
import { callApi } from "../helpers/apiHelper";
import { Booking, NewBooking } from "../types/types";


export const getBookings = async (): Promise<Booking[]> => {
  const bookings = await callApi(Enpoint.BOOKINGS, ApiMethods.GET);
  return bookings;
};

export const removeBooking = async (id: string): Promise<string> => {
  const res = await callApi(`${Enpoint.BOOKINGS}/${id}`, ApiMethods.DELETE);
  return res;
};

export const createBooking = async (booking: NewBooking): Promise<Booking> => {
  const newBooking = await callApi(Enpoint.BOOKINGS, ApiMethods.POST, booking);
  return newBooking;
};


