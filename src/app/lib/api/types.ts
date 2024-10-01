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
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}
