import { useState } from "react";
import Week from "./Week";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import SmallCards from "./SmallCards";
import TodaysAppointMents from "./TodaysAppointMents";
import Appointments from "./Appoinments";
import Products from "./Products";
import { infoData } from "../../Data/HomeInfoData";

const Home = () => {
  const [toggle, setToogle] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Week />
        </div>
        <div className="flex justify-between items-center gap-3 text-xl">
          <span
            className={`${toggle ? "text-orange-400" : "text-black"} font-bold`}
          >
            Rankings
          </span>
          <span onClick={() => setToogle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <BsToggleOn className="text-2xl text-orange-400" />
            ) : (
              <BsToggleOff className="text-2xl" />
            )}
          </span>
          <span
            className={`${toggle ? "text-black" : "text-orange-400"} font-bold`}
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
            <div className="w-9/12">
              <TodaysAppointMents />
            </div>
            <div className="w-1/4">
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
            <Products />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
