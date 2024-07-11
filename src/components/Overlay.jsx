import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Overlay = ({ onClose }) => {
  const { addNote } = useContext(AppContext);
  //state variable to keep in sync the note data
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
  });

  //function to track change in the inputs
  function changeHandler(event) {
    setNoteData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  //function to add new note
  function createHandler() {
    const { title, description } = noteData;
    addNote(title, description);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-orange p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 m-4 p-2 bg-gray-200 rounded text-black"
          onClick={onClose}
        >
          Close
        </button>
        <div className="w-[300px] h-[200px] bg-slate-300">
          <input
            required
            type="text"
            onChange={changeHandler}
            placeholder="Title"
            className="bg-blue-900 w-full px-3 py-2 border border-gray-300 focus:border-blue-500"
            name="title"
            value={noteData.title}
          />
          <textarea
            required
            onChange={changeHandler}
            name="description"
            value={noteData.description}
            placeholder="Enter your note here"
            className="
            w-full
            h-32
            px-3
            py-2
            border
            border-gray-300
            resize-none
            focus:border-blue-500
            text-black"
          ></textarea>
          <button
            onClick={createHandler}
            className=" w-full text-black bg-blue-50 hover:bg-blue-100"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
