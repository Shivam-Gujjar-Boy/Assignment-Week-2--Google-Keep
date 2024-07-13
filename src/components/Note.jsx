import React from "react";
import bin from "../assets/bin.svg";
import archive from "../assets/archive.svg";
import pin from "../assets/pin.svg";
import unarchive from "../assets/unarchive.svg";
import restore from "../assets/restore.svg";
import unpin from "../assets/unpin.svg";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Note = (props) => {
  //all functions to be required to move notes from one route to another
  const {
    deleteNote,
    archiveNote,
    pinNote,
    unarchiveNote,
    restoreNote,
    premanantlyDeleteNote,
    unpinNote,
  } = useContext(AppContext);
  const note = props.note;
  const type = props.type;

  return (
    <div className="w-[290px] h-[220px] inline-block border-white border-2 m-3 rounded-xl shadow-white shadow-sm">
      <div className="flex flex-col items-center">
        <p className=" w-full h-10 px-3 py-2 border focus:border-blue-500 text-[20px] flex justify-center items-center rounded-t-xl break-words">
          {note.title}
        </p>
        <div
          className="
            w-full
            h-32
            px-3
            py-2
            border
            border-gray-300
            text-white
            text-center
            break-words"
        >
          {note.content}
        </div>
      </div>
      <div className="flex gap-3 pl-3 pt-2 justify-start items-center">
        {/*Logic for which button to be shown on which route*/}
        {(type === "notes" || type === "important") && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => deleteNote(note)}>
              <img src={bin} alt="delete" width={24} height={24} />
            </button>
          </div>
        )}
        {(type === "notes" || type === "important") && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => archiveNote(note)}>
              <img src={archive} alt="archive" width={24} />
            </button>
          </div>
        )}
        {type === "notes" && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => pinNote(note)}>
              <img src={pin} alt="pinned" width={24} />
            </button>
          </div>
        )}
        {type === "archived" && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => unarchiveNote(note)}>
              <img src={unarchive} alt="unarchive" width={24} />
            </button>
          </div>
        )}
        {type === "bin" && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => restoreNote(note)}>
              <img src={restore} alt="restore" width={24} />
            </button>
          </div>
        )}
        {type === "bin" && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => premanantlyDeleteNote(note)}>
              <img src={bin} alt="delete" width={24} />
            </button>
          </div>
        )}
        {type === "important" && (
          <div className="w-[35px] h-[35px] flex justify-center items-center hover:bg-slate-500 transition duration-400 rounded-full">
            <button onClick={() => unpinNote(note)}>
              <img src={unpin} alt="unpin" width={24} />
            </button>
          </div>
        )}
        {type === "notes" && (
          <button className="hover:bg-slate-500 transition duration-400 rounded-md">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;
