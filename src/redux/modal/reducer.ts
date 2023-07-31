import { createReducer } from "@reduxjs/toolkit";
import {
  setModalClose,
  setModalOpen,
  updateDate,
  updatePeople,
  clearForm,
} from "./operations";

interface ModalState {
  isModalOpen: boolean;
  date: string;
  people: string;
}

const initialState: ModalState = {
  isModalOpen: false,
  date: "",
  people: "1",
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setModalOpen, (state) => {
    state.isModalOpen = true;
  });
  builder.addCase(setModalClose, (state) => {
    state.isModalOpen = false;
  });
  builder.addCase(updateDate, (state, action) => {
    state.date = action.payload.date;
  });
  builder.addCase(updatePeople, (state, action) => {
    state.people = action.payload.people;
  });
  builder.addCase(clearForm, (state) => {
    state.people = "1";
    state.date = "";
  });
});

export { reducer as modalReducer };
