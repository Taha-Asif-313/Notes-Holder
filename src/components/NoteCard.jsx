import React from "react";
import moment from "moment";
import { FaDownload } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NoteCard = ({
  NoteContent,
  NoteTitle,
  NoteUpdated,
  DeleteNote,
  DownloadNote,
  SelectNote,
  Note,
}) => {
  let stcontent = NoteContent.slice(0, 80) + "...";
  const navigate = useNavigate();
  return (
    <div className="w-full h-52 cursor-pointer flex flex-col justify-between bg-gradient-to-tr from-black to-[#210301] rounded-lg border border-primary py-8 px-5">
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-2 text-xl">
          {NoteTitle}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm">
          {NoteContent.length >= 80 ? stcontent : NoteContent}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">
            {moment(NoteUpdated).format("MMMM DD YYYY")}
          </p>
          <div className="flex items-center ">
            <button
              onClick={() => {
                SelectNote(Note);
                navigate("/view-note");
              }}
              className="w-8 h-8 text-white flex items-center justify-center text-2xl"
            >
              <MdEdit />
            </button>
            <button
              onClick={() => DownloadNote(NoteTitle, NoteContent)}
              className="w-8 h-8 text-white flex items-center justify-center text-2xl"
            >
              <FaDownload />
            </button>
            <button
              onClick={() => DeleteNote(Note)}
              className="w-8 h-8 text-white flex items-center justify-center text-2xl"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
