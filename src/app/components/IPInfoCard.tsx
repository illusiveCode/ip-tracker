import { FC } from "react";

type IPInfoCardProps = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
};

const IPInfoCard: FC<IPInfoCardProps> = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="bg-white grid tablet:grid-cols-4 gap-6 rounded-lg tablet:text-left text-center shadow-xl p-4 max-w-[1110px] max-h-[296px] mx-auto">
      <div className="tablet:border-r">
        <h2 className="text-sm font-bold text-gray-500">IP ADDRESS</h2>
        <p className="text-lg font-semibold text-gray-900">{ipAddress}</p>
      </div>
      <div className="tablet:border-r">
        <h2 className="text-sm font-bold text-gray-500">LOCATION</h2>
        <p className="text-lg font-semibold text-gray-900">{location}</p>
      </div>
      <div className="tablet:border-r">
        <h2 className="text-sm font-bold text-gray-500">TIMEZONE</h2>
        <p className="text-lg font-semibold text-gray-900">{timezone}</p>
      </div>
      <div className="">
        <h2 className="text-sm font-bold text-gray-500">ISP</h2>
        <p className="text-lg font-semibold text-gray-900">{isp}</p>
      </div>
    </div>
  );
};

export default IPInfoCard;
