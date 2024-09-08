"use client";

import IPInfoCard from "./components/IPInfoCard";
import IPInput from "./components/IPInput";
import Image from "next/image";
import mobileTopBg from "@/../../public/pattern-bg-mobile.png";

export default function Home() {
  return (
    <div className="relative mx-auto ">
      <Image src={mobileTopBg} alt={""} className="w-screen" />
      <div className="container w-full mx-auto absolute top-0">
        <div className="mb-6">
          <IPInput initialValue={""} onButtonClick={() => console.log("HELLO")} />
        </div>
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
  );
}
