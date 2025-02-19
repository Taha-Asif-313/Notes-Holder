import React from "react";
import { Toaster } from "react-hot-toast";
import { NoteProvider } from "./context/NotesContext";
import Navabar from "./components/Navabar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteView from "./pages/NoteView";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-white">
      <BrowserRouter>
        <NoteProvider>
          <Navabar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view-note" element={<NoteView />} />
          </Routes>
          <Toaster />
        </NoteProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
