import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarIcon } from "../Data/sideBarData";

export const SideBar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      <div className="bg-white bordered min-h-full mt-[3.75rem] py-10 w-20 fixed top-0 left-0 z-50">
        <div className="flex flex-col justify-between items-center gap-5">
          {sideBarIcon.map((icon, i) => (
            <span
              key={i}
              className={selected === icon.id ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(icon.id)}
            >
              <NavLink to={icon.link}>{icon.icon}</NavLink>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
