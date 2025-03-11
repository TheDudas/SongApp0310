import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import AddSong from "./pages/AddSong";
import EditSong from "./pages/EditSong";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useState } from "react";


const App = () => {

  const [songs, setSongs] = useState([]);

  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]); // Add new song to state
  };

  const handleUpdateSong = (updatedSong) => {
    setSongs(songs.map((song) => (song.id === updatedSong.id ? updatedSong : song)));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/add" element={<AddSong onAddSong={handleAddSong} />} />
          <Route path="/edit/:id" element={<EditSong songs={songs} onUpdateSong={handleUpdateSong} />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
