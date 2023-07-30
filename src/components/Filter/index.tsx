import { FC, ChangeEvent } from "react";
import "./filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../SearchInput";
import { RootState, AppDispatch } from "../../redux/store";
import { updateFilter } from "../../redux/filter/operation";
import { getAllTrips } from "../../redux/trips/operations";
// interface TripFilterProps {
//   onFilter: (searchTerm: string, duration: string, difficulty: string) => void;
// }
export const Filter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { search, duration, level } = useSelector(
    (state: RootState) => state.filter
  );

  const handleFilterPanel = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    dispatch(updateFilter({ name, value }));
    dispatch(getAllTrips({ search, duration, level }));
  };
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <SearchInput
          value={search}
          testId="filter-search"
          name="search"
          type="search"
          placeholder="search by title"
          title="Search by name"
          onChange={handleFilterPanel}
        />
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            onChange={handleFilterPanel}
            value={duration}
          >
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            data-test-id="filter-level"
            name="level"
            onChange={handleFilterPanel}
            value={level}
          >
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
