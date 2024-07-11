import React from "react";
import bin from "../assets/bin.svg";
import bulb from "../assets/bulb.svg";
import archive from "../assets/archive.svg";
import important from "../assets/important.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] mt-14 flex flex-col p-3 gap-5">
      <NavLink to="/">
        <div className="px-2 flex gap-6 w-[250px] h-[45px] cursor-pointer items-center hover:bg-slate-800 rounded-3xl transition duration-500">
          <img src={bulb} className="w-[30px]" alt="bulb" />
          <p>Added Notes</p>
        </div>
      </NavLink>
      <NavLink to="/important">
        <div
          className="px-2 flex gap-6 w-[250px] h-[45px] cursor-pointer items-center hover:bg-slate-800 rounded-3xl transition duration-500"
          id="deleted"
        >
          <img src={important} className="w-[30px]" alt="important" />
          <p>Important Notes</p>
        </div>
      </NavLink>
      <NavLink to="/archived">
        <div
          className="px-2 flex gap-6 w-[250px] h-[45px] cursor-pointer items-center hover:bg-slate-800 rounded-3xl transition duration-500"
          id="archived"
        >
          <img src={archive} className="w-[30px]" alt="archive" />
          <p>Archived</p>
        </div>
      </NavLink>
      <NavLink to="/bin">
        <div
          className="px-2 flex gap-6 w-[250px] h-[45px] cursor-pointer items-center hover:bg-slate-800 rounded-3xl transition duration-500"
          id="deleted"
        >
          <img src={bin} className="w-[30px]" alt="bin" />
          <p>Temporarily Deleted</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
