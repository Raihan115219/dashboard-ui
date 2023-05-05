import { useState } from "react";

interface IProps {
  TabData: any;
}

const Tab = ({ TabData }: IProps) => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="bg-white py-5 my-3 shadow-lg rounded-sm flex justify-between items-center gap-5 px-5">
        {TabData.map((item: any, i: any) => (
          <p
            key={i}
            onClick={() => setActive(item.id)}
            className={`${
              active === item.id
                ? "text-orange-400 border-orange-400 border-b-2"
                : "text-black "
            } cursor-pointer font-[700] text-[8px]`}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tab;
