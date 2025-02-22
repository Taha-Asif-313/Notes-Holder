import React, { useContext } from "react";
import NoteCard from "./NoteCard";
import NoteContext from "../context/NotesContext";

const NotesList = () => {
  const { Notes, deleteNote, downloadNote, setselectedNote } =
    useContext(NoteContext);
  return (
    <div className="w-full h-screen mt-20">
      {/* Task section heading */}
      <h1 className="text-4xl max-lg:text-3xl text-center font-bold mb-5">Your Notes</h1>
      {Notes.length === 0 ? (
        <div className="text-center lg:test-start min-h-80 ">
          No notes found !
        </div>
      ) : (
        <ul className="lg:px-24 relative grid lg:grid-cols-3 grid-cols-1 px-5 gap-5 w-full">
          {Notes.map((note, index) => {
            return (
              <NoteCard
                key={index}
                Note={note}
                NoteTitle={note.noteTitle}
                NoteContent={note.noteContent}
                NoteUpdated={note.updatedDate}
                DeleteNote={deleteNote}
                DownloadNote={downloadNote}
                SelectNote={setselectedNote}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
