import { RootState } from "../../redux/store";
export const selectLoadingAuth = (state: RootState) => state.auth.loading;
export const selectErrorCode = (state: RootState) => state.auth.errorCode;
export const selectUser = (state: RootState) => state.auth.user;
