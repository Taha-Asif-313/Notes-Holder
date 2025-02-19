import React, { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaSave } from "react-icons/fa";
import NoteContext from "../context/NotesContext";

const NoteView = () => {
  const { selectedNote, editNote } = useContext(NoteContext);
  const [editNoteMode, setEditNoteMode] = useState(false);
  const [noteTitle, setnoteTitle] = useState(selectedNote.noteTitle);
  const [noteContent, setnoteContent] = useState(selectedNote.noteContent);

  // Function to update note
  const UpdateNote = () => {
    editNote({
      id: selectedNote.id,
      noteTitle: noteTitle,
      noteContent: noteContent,
      updatedDate: new Date(),
    });
    setEditNoteMode(false);
  };
  return (
    <div className="min-h-screen w-full lg:px-20 px-6 pt-28">
      <div>
        <div>
          <div className="w-full grid grid-cols-2">
            <input
              className="text-4xl max-lg:text-2xl font-bold bg-transparent outline-none"
              type="text"
              value={noteTitle}
              onChange={(e) => setnoteTitle(e.target.value)}
              readOnly={!editNoteMode}
            />
            <div className="flex items-center justify-end gap-4 ">
              {editNoteMode ? (
                <div
                  onClick={() => UpdateNote()}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FaSave className="text-2xl text-primary" />
                  <span className="text-lg">Save</span>
                </div>
              ) : (
                <div
                  onClick={() => setEditNoteMode(true)}
                  className="flex item-center gap-2 cursor-pointer"
                >
                  <CiEdit className="text-2xl text-primary" />
                  <span className="text-lg">Edit</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-sm my-5">
            <textarea
              className="w-full min-h-80 h-auto text-sm bg-transparent outline-none"
              name="note-content"
              id="noteContent"
              readOnly={!editNoteMode}
              value={noteContent}
              onChange={(e) => setnoteContent(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
