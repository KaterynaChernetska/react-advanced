import { FC, useEffect } from "react";
import "./mainPage.scss";
import { Filter } from "../../components/Filter";
import { TripsList } from "../../components/TripsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getAllTrips } from "../../redux/trips/operations";
import { selectLoading, selectTrips } from "../../redux/trips/selectors";
import { selectFilter } from "../../redux/filter/selectors";

const MainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const trips = useSelector(selectTrips);
  const { search, duration, level } = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllTrips({ search, duration, level }));
  }, [dispatch, search, level, duration]);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter />
      <TripsList filteredTrips={trips} loading={loading} />
    </main>
  );
};
export default MainPage;
