// import { TripsFilterState } from "../types/filter";
// import { Trip } from "../types/types";

import { Trip } from "../types/types";

// const filterTrips = (filters: TripsFilterState, trips: Trip[]): Trip[] => {
//   const { search, duration, level } = filters;
//   if (search === "" && duration === "" && level === "") {
//     return trips;
//   }

//   return trips.filter((trip) => {
//     const matchSearch =
//       trip.title.toLowerCase().search(search.toLowerCase()) !== -1;

//     const matchDuration =
//       (duration === "0_x_5" && trip.duration < 5) ||
//       (duration === "5_x_10" && trip.duration >= 5 && trip.duration < 10) ||
//       (duration === "10_x" && trip.duration >= 10);

//     const matchLevel = !level || trip.level === level;
//     console.log(matchSearch, matchDuration, matchLevel);
//     return matchSearch && matchDuration && matchLevel;
//   });
// };

// export { filterTrips };




const filterByDuration = (value: string, Trips: Trip[]): Trip[] => {
  switch (value) {
    case "0_x_5":
      return Trips.filter((trip) => trip.duration < 5);
    case "5_x_10":
      return Trips.filter((trip) => trip.duration < 10 && trip.duration > 5);
    case "10_x":
      return Trips.filter((trip) => trip.duration >= 10);
    default:
      return Trips;
  }
};

const filterByLevel = (value: string, Trips: Trip[]): Trip[] => {
  if (!value) {
    return Trips;
  }
  const filteredByLevel = Trips.filter((trip) => trip.level === value);
  return filteredByLevel;
};

const filterBySearch = (value: string, Trips: Trip[]): Trip[] => {
  const filteredBySearch = Trips.filter((trip) =>
    trip.title.toLowerCase().includes(value.toLowerCase())
  );
  return filteredBySearch;
};

export { filterByDuration, filterByLevel, filterBySearch };
