import React, { useState } from "react";
import bars from "../assets/bars.svg";
import notes from "../assets/notes.svg";
import list from "../assets/list.svg";
import grid from "../assets/grid.svg";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  //State Variable to toggle between Light and Dark Mode
  const [mode, setMode] = useState(true);
  //State variable to toggle between grid and list wiew
  const [view, setView] = useState(true);

  function modeHandler() {
    setMode(!mode);
  }
  function viewHandler() {
    setView(!view);
  }

  return (
    <div className="w-screen h-[50px] border-b-2 border-white fixed top-0 flex justify-between items-center px-4 z-50">
      <div className="flex items-center justify-between gap-7">
        <div className="cursor-pointer rounded-full border-r-2 border-white hover:bg-slate-700 w-[35px] h-[35px] transition duration-400 flex justify-center items-center">
          <img src={bars} className="text-white w-[20px]" alt="bars" />
        </div>
        <Link to="/">
          <div className="flex justify-center items-center gap-3 text-[19px] cursor-pointer">
            <img src={notes} className="w-[30px] h-[30px]" alt="notes" />
            <p>Doogle Keep</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div
          onClick={viewHandler}
          className="flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-700 w-[35px] h-[35px] transition duration-400"
        >
          <img
            src={view === true ? grid : list}
            className="w-[20px]"
            alt="view"
          />
        </div>
        <div
          onClick={modeHandler}
          className="w-[90px] h-[30px] flex justify-center items-center cursor-pointer rounded-sm hover:bg-slate-700 transition duration-400"
        >
          <button>{mode === true ? "Light Mode" : "Dark Mode"}</button>
        </div>
        <div className="flex justify-center items-center cursor-pointer rounded-full  hover:bg-slate-700 w-[35px] h-[35px] transition duration-400">
          <img src={user} className="w-[20px]" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
