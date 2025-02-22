import React, { useContext } from "react";
import HeroContent from "../components/HeroContent";
import NotesList from "../components/NotesList";
import NoteContext from "../context/NotesContext";

const Home = () => {
  const { Notes } = useContext(NoteContext);
  return Notes.length == 0 ? <HeroContent /> : <NotesList />;
};

export default Home;
