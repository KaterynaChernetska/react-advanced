import { FC, useEffect } from "react";
import "./mainPage.scss";
import { Filter } from "../../components/Filter";
import { TripsList } from "../../components/TripsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllTrips } from "../../redux/trips/operations";

const MainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trips, loading } = useSelector((state: RootState) => state.trips);
  const filter = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    dispatch(getAllTrips(filter));
  }, [dispatch, filter]);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter />
      <TripsList filteredTrips={trips} loading={loading} />
    </main>
  );
};
export default MainPage;
