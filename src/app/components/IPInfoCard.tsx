import { FC } from "react";

type IPInfoCardProps = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
};

const IPInfoCard: FC<IPInfoCardProps> = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <div className="text-center">
        <h2 className="text-sm font-bold text-gray-500">IP ADDRESS</h2>
        <p className="text-lg font-semibold text-gray-900">{ipAddress}</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-sm font-bold text-gray-500">LOCATION</h2>
        <p className="text-lg font-semibold text-gray-900">{location}</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-sm font-bold text-gray-500">TIMEZONE</h2>
        <p className="text-lg font-semibold text-gray-900">{timezone}</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-sm font-bold text-gray-500">ISP</h2>
        <p className="text-lg font-semibold text-gray-900">{isp}</p>
      </div>
    </div>
  );
};

export default IPInfoCard;
