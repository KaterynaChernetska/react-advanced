import { Input } from "../Input";
import { TripInfo } from "../TripInfo";
import Notiflix from "notiflix";
import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  clearForm,
  setModalClose,
  updateDate,
  updatePeople,
} from "../../redux/modal/operations";
import { createNewBooking } from "../../redux/booking/operstions";
import { selectDate, selectPeople } from "../../redux/modal/selectors";
import { selectTrip } from "../../redux/tripById/selectors";
import { selectUser } from "../../redux/auth/selectors";

export const BookTripForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const date = useSelector(selectDate);
  const people = useSelector(selectPeople);
  const { title, duration, level, price, id: tripId } = useSelector(selectTrip);
  const { id: userId } = useSelector(selectUser);

  const onNumberOfGuestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updatePeople(event.target.value));
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    const tomorrowFormatted = `${year}-${month}-${day}`;

    if (event.target.value < tomorrowFormatted) {
      return Notiflix.Notify.warning("Please select valid date");
    }
    dispatch(updateDate(event.target.value));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setModalClose());
    const newBooking = {
      tripId,
      userId,
      guests: people,
      date,
    };
    dispatch(createNewBooking(newBooking));
    dispatch(clearForm());
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="book-trip-popup__form"
      autoComplete="off"
    >
      <TripInfo
        title={title}
        prefix={"book-"}
        duration={duration}
        level={level}
        container={"popup"}
      />
      <Input
        heading={"Date"}
        testId={"book-trip-popup-date"}
        name={"date"}
        type={"date"}
        required={true}
        value={date}
        onChange={onDateChange}
      />
      <Input
        heading={"Number of guests"}
        testId={"book-trip-popup-guests"}
        name={"guests"}
        type={"number"}
        required={true}
        value={people}
        min={"1"}
        max={"10"}
        onChange={onNumberOfGuestsChange}
      />

      <span className="book-trip-popup__total">
        Total:
        <output
          data-test-id="book-trip-popup-total-value"
          className="book-trip-popup__total-value"
        >
          {Number(people) * price}$
        </output>
      </span>
      <button
        data-test-id="book-trip-popup-submit"
        className="button"
        type="submit"
      >
        Book a trip
      </button>
    </form>
  );
};
