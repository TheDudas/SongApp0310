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

// imports all React and page information to run the App

const App = () => {

  const [songs, setSongs] = useState([]);
//sets songs into useState. 
//handles song requests for new songs and updating songs. 
  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]); // Add new song to state
  };

  const handleUpdateSong = (updatedSong) => {
    setSongs(songs.map((song) => (song.id === updatedSong.id ? updatedSong : song)));
  };
// returns via the react Router the Navbar and paths to the other pages of the website. 
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
