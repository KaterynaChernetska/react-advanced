import { getTripById } from "../services/trips";
import { Trip } from "../types/types";

export const createNewBooking = (
  tripId: string,
  guests: string,
  date: string
) => {
  const numberOfGuests = parseInt(guests, 10);
  const trip = getTripById(tripId) as unknown as Trip;
  const newBooking = {
    id: crypto.randomUUID(),
    userId: crypto.randomUUID(),
    tripId,
    guests: numberOfGuests,
    date,
    trip: {
      title: trip.title,
      duration: trip.duration,
      price: trip.price,
    },
    totalPrice: trip.price * numberOfGuests,
    createdAt: new Date().toISOString(),
  };

  return newBooking;
};


