import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./tripPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { TripInfo } from "../../components/TripInfo";
import ImageComponent from "../../components/TripImage";
import TripPrice from "../../components/TripPrice";
import { Modal } from "../../components/Modal";
import { getTrip } from "../../redux/tripById/operations";
import { Spinner } from "../../components/Spinner";

const TripPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tripId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getTrip(tripId as string));
  }, [dispatch, tripId]);

  const {
    loading,
    trip: { title, duration, level, price, description, image },
  } = useSelector((state: RootState) => state.tripByIdReducer);

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="trip">
          <ImageComponent
            className="trip__img"
            data-test-id="trip-details-image"
            src={image}
            alt={`${title} photo`}
          />
          <div className="trip__content">
            <TripInfo
              title={title}
              duration={duration}
              level={level}
              container="details"
            />
            <div
              data-test-id="trip-details-description"
              className="trip__description"
            >
              {description}
            </div>

            <TripPrice price={price} container="details" />
            <button
              onClick={handleModalOpen}
              data-test-id="trip-details-button"
              className="trip__button button"
            >
              Book a trip
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Modal
          onClose={onClose}
          tripId={tripId?.toString() as string}
          title={title}
          price={price}
          duration={duration}
          level={level}
        />
      )}
    </main>
  );
};
export default TripPage;
