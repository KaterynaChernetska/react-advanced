import { ApiMethods } from "../enums/api.enums";
import { Storage } from "../enums/storage.enum";
import { getItemByKey } from "./storageHepleps";

const API_URL = "https://binary-travel-app.xyz/api/v1";

export const callApi = async (
  endpoint: string,
  method = ApiMethods.GET,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
) => {
  const url = API_URL + endpoint;
  const token = getItemByKey(Storage.USER_TOKEN);

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res?.ok) {
    throw { status: res?.status };
  }

  const json = await res.json();
  return json;
};
