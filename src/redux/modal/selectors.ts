import {  RootState } from "../../redux/store";

export const selectIsModalOpen = (state:RootState) => state.modalReducer.isModalOpen;
export const selectDate = (state:RootState) => state.modalReducer.date;
export const selectPeople = (state:RootState) => state.modalReducer.people;