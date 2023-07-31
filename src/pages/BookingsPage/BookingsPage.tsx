import { FC, useEffect } from "react";
import "./bookingsPage.scss";
import { BookingsList } from "../../components/BookingsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getAllBookings } from "../../redux/booking/operstions";
import {
  selectLoading,
  selectSortedBookings,
} from "../../redux/booking/selectors";

const BookingsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bookings = useSelector(selectSortedBookings);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      {bookings.length > 0 ? (
        <BookingsList bookings={bookings} loading={loading} />
      ) : (
        <p>You have no bookings yet</p>
      )}
    </main>
  );
};

export default BookingsPage;
