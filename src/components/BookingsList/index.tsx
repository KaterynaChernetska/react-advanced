import { Booking } from "../../types/types";
import { BookingsListItem } from "../BookingsListItem";
import { Spinner } from "../Spinner";
import "./bookingsList.scss";
import { FC } from "react";

export interface BookingsProps {
  bookings: Booking[];
  loading: boolean;
}

export const BookingsList: FC<BookingsProps> = ({
  bookings,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="bookings__list">
          {bookings.map((booking) => (
            <BookingsListItem
              key={booking.id}
              id={booking.id}
              totalPrice={booking.totalPrice}
              guests={booking.guests}
              title={booking.trip.title}
              date={booking.date}
            />
          ))}
        </ul>
      )}
    </>
  );
};
