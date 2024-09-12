"use client";

// import IPInfoCard from "./components/IPInfoCard";
// import IPInput from "./components/IPInput";
// import Image from "next/image";
// import mobileTopBg from "@/../../public/pattern-bg-mobile.png";
// import Heading from "./components/Heading";
import { fetchGeolocation } from "./lib/api/geolocation";

export default function Home() {
  const handleGetLocation = async () => {
    try {
      const locationData = await fetchGeolocation();
      console.log("Location Data:", locationData);
    } catch (error) {
      console.error("Error fetching geolocation:", error);
    }
  };
  return (
    <div className="relative mx-auto">
      {/* <Image src={mobileTopBg} alt={""} className="w-screen" />
      <div className="absolute top-4 text-center left-[50%] -translate-x-[50%]">
        <Heading title="IP Address Tracker" />
      </div>
      <div className="container w-full mx-auto absolute top-16">
        <div className="mb-6">
          <IPInput initialValue={""} onButtonClick={() => console.log("HELLO")} />
        </div>
        <div>
          <IPInfoCard
            ipAddress={"192.212.174.101"}
            location={"Brooklyn, NY 10001"}
            timezone={"UTC -05:00"}
            isp={"SpaceX Starlink"}
          />
        </div>
      </div> */}
      <div className="map | h-full w-screen">
        <button
          onClick={handleGetLocation}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Get Location
        </button>
      </div>
    </div>
  );
}
