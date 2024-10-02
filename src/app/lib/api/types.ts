export interface GeolocationResponse {
  ip: string;
  location: {
    city: string;
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}
