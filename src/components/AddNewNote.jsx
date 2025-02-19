import React, { useContext, useState } from "react";
import NoteContext from "../context/NotesContext";
import { IoAdd } from "react-icons/io5";

const AddNewNote = ({ Show, setShow }) => {
  // UseContext to get data of todolist
  const { addNote } = useContext(NoteContext);

  // Generate random id
  const generateUniqueId = () => {
    return window.crypto.randomUUID();
  };

  //States
  const [noteInput, setnoteInput] = useState({
    id: generateUniqueId(),
    noteTitle: "",
    noteContent: "",
    updatedDate: new Date(),
  });

  // OnChange function
  const onChangeHandler = (e) => {
    setnoteInput({ ...noteInput, [e.target.name]: e.target.value });
  };

  // Return the input field box
  return (
    <div
      className={`${
        Show ? "flex" : "hidden"
      } fixed inset-0 p-4 flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
    >
      <div className="w-full max-w-lg bg-zinc-950 border border-primary shadow-lg rounded-md p-5 relative">
        <svg
          onClick={() => setShow(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 shrink-0 fill-white hover:fill-primary cursor-pointer float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
        <div className="my-4 text-center">
          <h4 className="text-2xl font-bold">Add new note!</h4>
          <p className="text-sm mt-2">
            You can decide the title, description and background color.
          </p>
          <div className="mt-6">
            <input
              type="text"
              name="noteTitle"
              onChange={onChangeHandler}
              value={noteInput.noteTitle}
              placeholder="Enter note title"
              className="px-4 py-2.5 border border-primary w-full text-sm bg-transparent rounded"
            />
            <textarea
              type="text"
              name="noteContent"
              onChange={onChangeHandler}
              value={noteInput.noteContent}
              rows={8}
              placeholder="Type note"
              className="px-4 py-2.5 border border-primary mt-2 w-full text-sm bg-transparent rounded"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            addNote(noteInput);
            setShow(false);
          }}
          className="px-5 py-1.5 w-full flex items-center justify-center gap-1 rounded-md text-white text-sm font-bold outline-none bg-primary hover:bg-red-950"
        >
          <IoAdd className="text-2xl" />
          Create Note
        </button>
      </div>
    </div>
  );
};

export default AddNewNote;
