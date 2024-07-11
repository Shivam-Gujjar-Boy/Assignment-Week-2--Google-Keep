import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Note from "../components/Note";

const Important = () => {
  const { important } = useContext(AppContext);

  return (
    <div className="mt-14 w-[83%] h-[670px] overflow-scroll pl-3">
      {important.length === 0 ? (
        <div className="w-[100%] h-[100%] flex justify-center items-center text-[25px]">
          Pinned Notes will be visible here
        </div>
      ) : (
        important.map((note, index) => {
          return <Note key={index} note={note} type="important" />;
        })
      )}
    </div>
  );
};

export default Important;
