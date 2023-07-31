import { Trip } from "../types/types";

interface TripsFilterState {
  search: string;
  duration: string;
  level: string;
}

const filterTrips = (filters: TripsFilterState, trips: Trip[]): Trip[] => {
  const { search, duration, level } = filters;
  return trips.filter((trip) => {
    const matchSearch =
      trip.title.toLowerCase().search(search.toLowerCase()) !== -1;

    let matchDuration = null;

    switch (duration) {
      case "0_x_5":
        matchDuration = trip.duration <= 5;
        break;
      case "5_x_10":
        matchDuration = trip.duration >= 5 && trip.duration < 10;
        break;
      case "10_x":
        matchDuration = trip.duration >= 10;
        break;
      default:
        matchDuration = true;
    }

    const matchLevel = !level || trip.level === level;
    return matchSearch && matchDuration && matchLevel;
  });
};

export { filterTrips };
