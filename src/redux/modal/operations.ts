import { createAction, PrepareAction } from "@reduxjs/toolkit";
import { ActionTypes } from "../../enums/actionsTypes.enum";

interface UpdateDatePayload {
  date: string;
}

interface UpdatePeoplePayload {
  people: string;
}

export const setModalOpen = createAction<void, string>(
  ActionTypes.SET_MODAL_OPEN
);

export const setModalClose = createAction<void, string>(
  ActionTypes.SET_MODAL_CLOSE
);

export const updateDate = createAction<
  PrepareAction<UpdateDatePayload>,
  string
>(ActionTypes.UPDATE_MODAL_DATE, (date: string) => {
  return { payload: { date } };
});

export const updatePeople = createAction<
  PrepareAction<UpdatePeoplePayload>,
  string
>(ActionTypes.UPDATE_MODAL_PEOPLE, (people: string) => {
  return { payload: { people } };
});

export const clearForm = createAction<void, string>(ActionTypes.CLEAR_MODAL);
