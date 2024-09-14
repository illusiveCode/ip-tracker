"use client";

import { useState, useEffect } from "react";
import Map from "./components/Map";
import Image from "next/image";
import { fetchGeolocation } from "./lib/api/geolocation";
import topBg from "@/../../public/pattern-bg-mobile.png";

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
      <div className="flex-shrink-0 h-1/3 ">
        <Image src={topBg} alt={""} layout="responsive" className="object-cover" />
      </div>
      <div className="flex-1">
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
