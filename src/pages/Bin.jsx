import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Note from "../components/Note";

const Bin = () => {
  const { deleted } = useContext(AppContext);

  return (
    <div className="mt-14 w-[83%] h-[670px] overflow-scroll pl-3">
      {deleted.length === 0 ? (
        <div className="w-[100%] h-[100%] flex justify-center items-center text-[25px]">
          Deleted Notes will be visible here
        </div>
      ) : (
        deleted.map((note, index) => {
          return <Note key={index} note={note} type="bin" />;
        })
      )}
    </div>
  );
};

export default Bin;
