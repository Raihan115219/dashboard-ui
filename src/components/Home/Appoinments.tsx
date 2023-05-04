import React, { useState } from "react";
import { commonCardData } from "../../Data/commonCardData";

const Appointments = () => {
  const [acitve, setActive] = useState(true);
  return (
    <div className=" bg-base-100 w-full h-full shadow-md rounded-md p-5">
      <div className="title flex justify-between items-center ">
        <div>
          <h3 className="font-bold text-blue-400">Appointments</h3>
        </div>
        <div>
          <span className="font-bold underline text-orange-500 cursor-pointer">
            view all
          </span>
        </div>
      </div>
      <div
        className={`flex justify-between text-center items-center pt-4 pb-3  cursor-pointer`}
      >
        <span
          onClick={() => setActive(!acitve)}
          className={`font-bold ${
            acitve ? "text-orange-500  border-b-orange-600 border-b-4" : ""
          }`}
        >
          Pending
        </span>
        <span
          onClick={() => setActive(!acitve)}
          className={`font-bold ${
            acitve ? "" : "text-orange-500  border-b-orange-600 border-b-4"
          }`}
        >
          Complete
        </span>
      </div>
      <div>
        {commonCardData.map((item, i) => (
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <span>
                <img className="w-5 h-5 rounded-full " src={item.user} alt="" />
              </span>
              <div>
                <p className="font-bold text-md">{item.name}</p>
                <span className="text-sm text-gray-200">{item.time}</span>
              </div>
            </div>
            <div className="flex justify-around">
              {item.trends.map((trend, i) => (
                <img
                  className="w-5 h-5 rounded-full mx-1"
                  src={trend.obj}
                  alt="test"
                  key={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
