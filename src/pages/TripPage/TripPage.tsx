import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { getTripById } from "../../services/trips";
import "./tripPage.scss";
import { Trip } from "../../types/types";
import { TripInfo } from "../../components/TripInfo";
import ImageComponent from "../../components/TripImage";
import TripPrice from "../../components/TripPrice";
import { Modal } from "../../components/Modal";

const TripPage: FC = () => {
  const { tripId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const { title, duration, level, price, description, image } = getTripById(
    tripId as string
  ) as Trip;

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
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
