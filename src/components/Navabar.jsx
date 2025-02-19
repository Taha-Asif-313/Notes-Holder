import React, { useState } from "react";
import { MdNoteAdd } from "react-icons/md";
import AddNewNote from "./AddNewNote";
import { Link } from "react-router-dom";

const Navabar = () => {
  // States
  const [showInputBox, setshowInputBox] = useState(false);

  return (
    <>
      {/* Input Dialog box */}
      <AddNewNote Show={showInputBox} setShow={setshowInputBox} />

      {/* NavBar and items */}
      <div className="flex absolute z-10 top-0 left-0 w-full justify-between px-5 lg:px-24 gap-2">
        <Link
          to={"/"}
          className="logo py-2 flex items-center justify-center gap-2"
        >
          <img className="w-5" src="/logo.svg" alt="Logo" />
          <span className="lg:text-sm text-sm font-bold">
            Notes <span className="text-primary">Holder</span>
          </span>
        </Link>

        <button
          onClick={() => setshowInputBox(true)}
          className="text-sm cursor-pointer py-5 font-medium flex items-center gap-2"
        >
          <MdNoteAdd className="lg:text-3xl text-4xl text-primary  rounded-full font-bold" />{" "}
          <span className="max-lg:hidden"> Add New Note</span>
        </button>
      </div>
    </>
  );
};

export default Navabar;
