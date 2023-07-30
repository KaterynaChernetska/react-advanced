import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";


const rootReducer = combineReducers({
//   trips: tripsReducer,
//   filterPanel,
  authReducer,
//   trip,
//   modal,
//   bookings,
//   booking,
});

export { rootReducer };
