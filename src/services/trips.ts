import { ApiMethods } from "../enums/api.enums";
import { Enpoint } from "../enums/endpoinds";
import { callApi } from "../helpers/apiHelper";
import { Trip } from "../types/types";

export const getTrips = async (): Promise<Trip[]> => {
  const trips = await callApi(Enpoint.TRIPS, ApiMethods.GET);
  return trips;
};

export const getTripById = async (id: string): Promise<Trip> => {
  const trip = await callApi(`${Enpoint.TRIPS}/${id}`, ApiMethods.GET);
  return trip;
};
