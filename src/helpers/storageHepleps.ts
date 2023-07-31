import { Storage } from "../enums/storage.enum";

const getItemByKey = (key: Storage) => {
  const res = localStorage.getItem(key);
  return res;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setItem = (key: Storage, value: any) => {
  localStorage.setItem(key, value);
};

const removeItem = (key: Storage) => {
  localStorage.removeItem(key);
};

export { getItemByKey, setItem, removeItem };
