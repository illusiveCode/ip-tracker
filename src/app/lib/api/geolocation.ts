import { GeolocationResponse } from "./types";

export const fetchGeolocation = async (
  apiKey: string,
  ip?: string
): Promise<GeolocationResponse> => {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${
    ip ? `&ipAddress=${ip}` : ""
  }`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result: GeolocationResponse = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error fetching geolocation data");
  }
};
