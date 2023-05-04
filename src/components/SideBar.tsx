import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarIcon } from "../Data/sideBarData";

export const SideBar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      <div className="bg-white bordered min-h-full py-10 w-20">
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
