import { actionTypes } from "../../enums/actionsTypes.enum";
import { UpdateFilter } from "../../types/filter";
import { createAction, PrepareAction } from "@reduxjs/toolkit";


export const updateFilter = createAction<PrepareAction<UpdateFilter>, string>(
  actionTypes.UPDATE_FILTER,
  ({ name, value }: UpdateFilter) => {
    return { payload: { name, value } };
  }
);
