import Notiflix from "notiflix";
import { removeItem } from "./storageHepleps";
import { Storage } from "../enums/storage.enum";

const errorHandler = (status: unknown) => {
  if (status === 401) {
    Notiflix.Notify.failure("You are unauthorized!");

    removeItem(Storage.USER_TOKEN);
  } else {
    Notiflix.Notify.failure("Oops! Something went wrong..");
  }
};

export { errorHandler };
