import { FC, useState } from "react";
import Image from "next/image";
import arrow from "@/../../public/icon-arrow.svg";

type IPInputProps = {
  initialValue: string;
  onButtonClick: (value: string) => void;
};

const IPInput: FC<IPInputProps> = ({ initialValue, onButtonClick }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex mx-auto items-center max-w-[555px] bg-white rounded-xl w-full h-14 shadow hover:cursor-pointer">
      <input
        type="decimal"
        value={inputValue}
        onChange={handleInputChange}
        className="flex-1 text-gray-800 outline-none pl-4 "
      />
      <button
        onClick={() => onButtonClick(inputValue)}
        className="text-white bg-black flex justify-center items-center overflow-hidden ml-4 w-14 rounded-r-xl h-full active:opacity-75"
        aria-label="Proceed"
      >
        <Image src={arrow} alt="Arrow Icon" className="object-contain" />
      </button>
    </div>
  );
};

export default IPInput;
