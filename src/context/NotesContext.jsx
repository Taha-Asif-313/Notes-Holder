import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  // States
  const [Notes, setNotes] = useState(() => {
    const savedData = localStorage.getItem("Notes");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [selectedNote, setselectedNote] = useState({});

  // Use Effect to store data in localStorage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }, [Notes]);

  // Function to add Note
  const addNote = (Note) => {
    setNotes([...Notes, Note]);
    toast.success("Note added!");
  };

  // Function to delete Note
  const deleteNote = (noteToDelete) => {
    setNotes((prevnotes) => prevnotes.filter((note) => note !== noteToDelete));
    toast.success("Note deleted!");
  };

  // Function to download Note
  const downloadNote = (noteTitle, noteContent) => {
    const blob = new Blob([noteContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${noteTitle}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to edit Note
  const editNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    toast.success("Note updated!");
  };
  // Return with children
  return (
    <NoteContext.Provider
      value={{
        Notes,
        addNote,
        deleteNote,
        downloadNote,
        editNote,
        selectedNote,
        setselectedNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
