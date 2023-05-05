import { useState } from "react";
import Tab from "../common/Tab";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import SmallCards from "./SmallCards";
import TodaysAppointMents from "./TodaysAppointMents";
import Appointments from "./Appoinments";
import Products from "./NewGadegts";
import { infoData } from "../../Data/HomeInfoData";
import NewGadegts from "./NewGadegts";

const Home = () => {
  const [toggle, setToogle] = useState(false);

  const TabData = [
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
      <div className="flex justify-between items-center">
        <div>
          <Tab TabData={TabData} />
        </div>
        <div className="flex justify-between items-center gap-3 text-[8px]">
          <span
            className={`${toggle ? "text-[#e79a37]" : "text-black"} font-[600]`}
          >
            Bookings
          </span>
          <span onClick={() => setToogle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <BsToggleOn className="text-2xl text-orange-400" />
            ) : (
              <BsToggleOff className="text-2xl" />
            )}
          </span>
          <span
            className={`${toggle ? "text-black" : "text-[#e79a37]"} font-[600]`}
          >
            checking
          </span>
        </div>
      </div>
      <section className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {infoData.map((item, i) => (
          <div className="">
            <SmallCards item={item} key={i} />
          </div>
        ))}
      </section>
      <section>
        <div className="my-5">
          <div className="flex md:flex-row justify-between mx-auto gap-3">
            <div className="w-3/5">
              <TodaysAppointMents />
            </div>
            <div className="w-2/5">
              <Appointments />
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className=" grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="">
            <Appointments />
          </div>
          <div className="">
            <Appointments />
          </div>
          <div className="">
            <NewGadegts />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
