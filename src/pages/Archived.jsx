import React, { useContext } from "react";
import Note from "../components/Note";
import { AppContext } from "../context/AppContext";

const Archived = () => {
  const { archived } = useContext(AppContext);

  return (
    <div className="mt-14 w-[83%] h-[670px] overflow-scroll pl-3">
      {archived.length === 0 ? (
        <div className="w-[100%] h-[100%] flex justify-center items-center text-[25px]">
          Archived Notes will be visible here
        </div>
      ) : (
        archived.map((note, index) => {
          return <Note key={index} note={note} type="archived" />;
        })
      )}
    </div>
  );
};

export default Archived;
