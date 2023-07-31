import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { tripsReducer } from "./trips/reducer";
import { tripByIdReducer } from "./tripById/reducer";
import { filter } from "./filter/reducer";
import { modalReducer } from "./modal/reducer";
import { bookingReducer } from "./booking/reducer";

const rootReducer = combineReducers({
  trips: tripsReducer,
  filter,
  auth: authReducer,
  tripByIdReducer,
  modalReducer,
  bookingReducer,
});

export { rootReducer };
