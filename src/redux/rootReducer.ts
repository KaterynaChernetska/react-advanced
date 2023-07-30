import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { tripsReducer } from "./trips/reducer";
import { filter } from "./filter/reducer";

const rootReducer = combineReducers({
  trips: tripsReducer,
  filter,
  auth: authReducer,
  //   trip,
  //   modal,
  //   bookings,
  //   booking,
});

export { rootReducer };
