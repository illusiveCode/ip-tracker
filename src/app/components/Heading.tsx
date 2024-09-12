import { FC } from "react";

type HeadingProps = {
  title: string;
};

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h1 className="text-2xl font-semibold text-white whitespace-nowrap overflow-hidden">{title}</h1>
  );
};

export default Heading;
