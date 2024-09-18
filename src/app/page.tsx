"use client";

import { useState, useEffect } from "react";
import Map from "./components/Map";
import Image from "next/image";
import { fetchGeolocation } from "./lib/api/geolocation";
import mobileBg from "@/../../public/pattern-bg-mobile.png";
import desktopBg from "@/../../public/pattern-bg-desktop.png";
import IPInput from "./components/IPInput";
import Heading from "./components/Heading";
import IPInfoCard from "./components/IPInfoCard";

const Home = () => {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getUserLocation = async () => {
    try {
      const locationData = await fetchGeolocation();
      const { lat, lng } = locationData.location;
      setUserPosition([lat, lng]);
      console.log(locationData);
    } catch (err) {
      setError("Failed to fetch location");
      console.error(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile BG */}
      <div className="">
        <div className="-z-10 w-full tablet:hidden">
          <Image src={mobileBg} alt={""} layout="responsive" className="object-cover" />
        </div>
        <div className=" hidden tablet:block ">
          <Image src={desktopBg} alt={""} layout="responsive" className="object-cover" />
        </div>
        <div className="mt-6 absolute left-[50%] -translate-x-[50%] z-20 top-0 grid gap-6 w-full container text-center">
          <Heading title={"IP Address Tracker"} />
          <IPInput
            initialValue={""}
            onButtonClick={() => {
              console.log("SEARCHED");
            }}
          />
          <div className="">
            <IPInfoCard
              ipAddress={"192.212.174.101"}
              location={"Brooklyn, NY 10001"}
              timezone={"UTC -05:00"}
              isp={"SpaceX Starlink"}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 ">
        {loading ? (
          <p>Loading map...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          userPosition && <Map initialPosition={userPosition} />
        )}
      </div>
    </div>
  );
};

export default Home;
