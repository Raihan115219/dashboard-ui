import React from "react";

interface IProps {
  item: any;
}

const SmallCards = ({ item }: IProps) => {
  return (
    <div className=" bg-base-100 w-48 h-28 shadow-md rounded-md">
      <div className="card-body">
        <div className="flex justify-around items-center gap-1 ">
          <div className="w-15 h-15 rounded-full bg-green-200 p-2 flex justify-center items-center ">
            <span className="text-xl text-center">{item.icon}</span>
          </div>
          <div className="">
            <span className="text-xl font-bold">{item.amount}</span>
            <br />
            <p className="text-gray-500 text-sm">{item.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
