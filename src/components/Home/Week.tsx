import { useState } from "react";

const Week = () => {
  const [active, setActive] = useState(1);
  const week = [
    {
      id: 1,
      name: "Today",
    },
    {
      id: 2,
      name: "This week",
    },
    {
      id: 3,
      name: "This month",
    },
    {
      id: 4,
      name: "Last 90 days",
    },
  ];

  return (
    <div>
      <div className="bg-white py-5 my-3 shadow-lg rounded-sm flex justify-between items-center gap-5 px-5">
        {week.map((item, i) => (
          <p
            key={i}
            onClick={() => setActive(item.id)}
            className={`${
              active === item.id ? "text-orange-400 underline" : "text-black "
            } cursor-pointer font-bold`}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Week;
