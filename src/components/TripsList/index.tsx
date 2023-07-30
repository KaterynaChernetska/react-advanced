import "./tripsList.scss";
import { TripItemProps, TripsListItem } from "../TripsListItem";
import { FC } from "react";
import { Spinner } from "../Spinner";

interface TripsListProps {
  filteredTrips: TripItemProps[];
  loading: boolean;
}

export const TripsList: FC<TripsListProps> = ({ filteredTrips, loading }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="trip-list">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <TripsListItem
                key={trip.id}
                id={trip.id}
                title={trip.title}
                level={trip.level}
                duration={trip.duration}
                price={trip.price}
                image={trip.image}
              />
            ))
          ) : (
            <p className="no-trips-text">
              Sorry, there are no trips according your filter
            </p>
          )}
        </ul>
      )}
    </section>
  );
};
