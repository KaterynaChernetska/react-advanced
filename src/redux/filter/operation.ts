import { ActionTypes } from "../../enums/actionsTypes.enum";
import { createAction, PrepareAction } from "@reduxjs/toolkit";

interface UpdateFilter {
  name: string;
  value: string;
}

export const updateFilter = createAction<PrepareAction<UpdateFilter>, string>(
  ActionTypes.UPDATE_FILTER,
  ({ name, value }: UpdateFilter) => {
    return { payload: { name, value } };
  }
);
