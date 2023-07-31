import { Input } from "../Input";
import { TripInfo } from "../TripInfo";
import Notiflix from "notiflix";
import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  clearForm,
  setModalClose,
  updateDate,
  updatePeople,
} from "../../redux/modal/operations";

export const BookTripForm: FC = () => {
  const { date, people } = useSelector(
    (state: RootState) => state.ModalReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    trip: { title, duration, level, price, description, image, id },
  } = useSelector((state: RootState) => state.tripByIdReducer);

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
    // const newBooking = createNewBooking(tripId, people, date);
    // createBooking(newBooking);
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
