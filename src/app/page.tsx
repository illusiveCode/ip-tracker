"use client";

import { useState, useEffect } from "react";
import IPInfoCard from "./components/IPInfoCard";
import mobileBg from "@/../../public/pattern-bg-mobile.png";
import desktopBg from "@/../../public/pattern-bg-desktop.png";
import Image from "next/image";
import IPInput from "./components/IPInput";
import Heading from "./components/Heading";
import { fetchGeolocation } from "./lib/api/geolocation";
import { GeolocationResponse } from "./lib/api/types";
import dynamic from "next/dynamic";

const Home = () => {
  const [locationData, setLocationData] = useState<GeolocationResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const Map = dynamic(() => import("./components/Map"), { ssr: false });

  const apiKey = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY!;

  const fetchAPIData = async (ip?: string) => {
    setLoading(true);
    try {
      const result = await fetchGeolocation(apiKey, ip); // If no IP is passed, it fetches based on user's device IP
      setLocationData(result);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputEnter = (ip: string) => {
    if (ip) {
      fetchAPIData(ip);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* MOBILE */}
      <div className="tablet:hidden">
        <div className="-z-10 w-full max-h-[300px]">
          <Image src={mobileBg} alt={""} layout="responsive" className="object-cover" />
        </div>

        <div className="mt-6 absolute left-[50%] -translate-x-[50%] z-20 top-0 grid gap-6 w-full container text-center">
          <Heading title={"IP Address Tracker"} />
          <IPInput initialValue={""} onButtonClick={onInputEnter} />
          {locationData && (
            <IPInfoCard
              ipAddress={locationData.ip}
              location={` ${locationData.location.region}, ${locationData.location.country}`}
              timezone={`UTC ${locationData.location.timezone}`}
              isp={locationData.isp}
            />
          )}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="tablet:flex hidden">
        <div className="max-h-[280px] w-full">
          <Image src={desktopBg} alt={""} layout="responsive" className="object-cover" />
        </div>

        <div className="mt-6 absolute left-[50%] -translate-x-[50%] z-20 top-0 grid gap-6 w-full container text-center">
          <Heading title={"IP Address Tracker"} />
          <IPInput initialValue={""} onButtonClick={onInputEnter} />
          {locationData && (
            <div className="mx-auto">
              <IPInfoCard
                ipAddress={locationData.ip}
                location={`${locationData.location.city}, ${locationData.location.region}`}
                timezone={`UTC ${locationData.location.timezone}`}
                isp={locationData.isp}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        {loading ? (
          <p>Loading map...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          locationData && (
            <Map initialPosition={[locationData.location.lat, locationData.location.lng]} />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
