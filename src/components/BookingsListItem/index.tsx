import { FC } from "react";
import "./bookingsListItem.scss";
import { formatDateToCustomFormat } from "../../helpers/convertDate";
import { removeBookingById } from "../../redux/booking/operstions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface BookingsListItemProps {
  id: string;
  totalPrice: number;
  guests: number;
  title: string;
  date: string;
}

export const BookingsListItem: FC<BookingsListItemProps> = ({
  id,
  totalPrice,
  guests,
  title,
  date,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteButtonClick = (id: string) => {
    dispatch(removeBookingById(id));
  };

  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {formatDateToCustomFormat(date)}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {totalPrice} $
      </span>
      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
        onClick={() => handleDeleteButtonClick(id)}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};
