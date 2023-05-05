import { useState } from "react";

interface IProps {
  heading1: string;
  heading2: string;
  tab1: string;
  tab2: string;
  tab3?: string;
}

const CardHeading = ({ heading1, heading2, tab1, tab2, tab3 }: IProps) => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="title flex justify-between items-center ">
        <div>
          <h3 className="text-[#424e9c] text-[700]">{heading1}</h3>
        </div>
        <div>
          <span className="text-[#e79a37] cursor-pointer underline">
            {heading2}
          </span>
        </div>
      </div>
      <div
        className={`flex justify-evenly items-center pt-4  cursor-pointer border-b-2`}
      >
        <span
          onClick={() => setActive(!active)}
          className={` text-[700] text-[14px] text-center w-32 ${
            active ? "text-[#e79a37]  border-b-orange-600 border-b-2" : ""
          }`}
        >
          {tab1}
        </span>
        <span
          onClick={() => setActive(!active)}
          className={`text-[700] text-[14px] text-center w-32 ${
            active ? "" : "text-[#e79a37]  border-b-orange-600 border-b-2"
          }`}
        >
          {tab2}
        </span>
        {tab3 && (
          <span
            onClick={() => setActive(!active)}
            className={`text-[700] text-[14px] text-center w-32 ${
              active ? "" : "text-[#e79a37]  border-b-orange-600 border-b-2"
            }`}
          >
            {tab3}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardHeading;
