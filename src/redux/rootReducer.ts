import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { tripsReducer } from "./trips/reducer";
import {tripByIdReducer} from "./tripById/reducer";
import { filter } from "./filter/reducer";
import {ModalReducer} from "./modal/reducer";

const rootReducer = combineReducers({
  trips: tripsReducer,
  filter,
  auth: authReducer,
  tripByIdReducer,
  ModalReducer,

  //   trip,
  //   modal,
  //   bookings,
  //   booking,
});

export { rootReducer };
