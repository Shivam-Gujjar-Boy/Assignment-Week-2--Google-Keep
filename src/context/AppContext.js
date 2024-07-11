import { createContext, useState } from "react";
import toast from "react-hot-toast";

//Creating context for all components in the app and also exporting simultneously
export const AppContext = createContext();

//creating and exporting the context provider
export default function AppContextProvider({ children }) {
  //All state variable in the application
  const [notes, setNotes] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [archived, setArchived] = useState([]);
  const [important, setImportant] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  //to add new note
  function addNote(title, description) {
    if (title) {
      if (notes.length > 0)
        setNotes((prevNotes) => {
          return [
            ...prevNotes,
            {
              id: notes.length,
              title: title,
              content: description,
            },
          ];
        });
      else {
        setNotes([
          {
            id: 0,
            title: title,
            content: description,
          },
        ]);
      }
      toast.success("Note created successfully");
    } else {
      toast.error("Note can not be created without title");
    }
  }

  //to temporarily note
  function deleteNote(note) {
    setNotes(notes.filter((item) => item.id !== note.id));
    setImportant(important.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setDeleted((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setDeleted([note]);
    }
    toast.error("Moved to Bin");
  }

  //to archive note
  function archiveNote(note) {
    setNotes(notes.filter((item) => item.id !== note.id));
    setImportant(important.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setArchived((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setArchived([note]);
    }
    toast.success("Moved to Archived");
  }

  //to pin a note
  function pinNote(note) {
    setNotes(notes.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setImportant((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setImportant([note]);
    }
    toast.success("Pinned Successfully");
  }

  //to unarchive a note
  function unarchiveNote(note) {
    setArchived(archived.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setNotes([note]);
    }
    toast.success("Unarchived Successfully");
  }

  //to restore a note from bin
  function restoreNote(note) {
    setDeleted(deleted.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setNotes([note]);
    }
    toast.success("Restored Successfully");
  }

  //to permanently delete a note
  function premanantlyDeleteNote(note) {
    setDeleted(deleted.filter((item) => item.id !== note.id));
    toast.error("Note was permanantly deleted");
  }

  //to unpin a note
  function unpinNote(note) {
    setImportant(important.filter((item) => item.id !== note.id));
    if (notes.length > 0)
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });
    else {
      setNotes([note]);
    }
    toast.success("Unpinned");
  }

  //values to be sent as props with the provider
  const value = {
    notes,
    deleted,
    archived,
    showOverlay,
    setShowOverlay,
    important,
    deleteNote,
    archiveNote,
    addNote,
    pinNote,
    unarchiveNote,
    restoreNote,
    premanantlyDeleteNote,
    unpinNote,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
