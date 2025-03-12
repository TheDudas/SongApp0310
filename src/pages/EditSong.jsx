// src/pages/EditSong.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// imports bootstrap and react components. 

// edits song parameters. add title, album and band name to Song ID
const EditSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({ title: "", album: "", band: "" });

  // Fetch the song by ID from MockAPI
  useEffect(() => {
    fetch(`https://67cfa24e823da0212a82daef.mockapi.io/api/Songs/${id}`)
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((error) => console.error("Error fetching song:", error));
  }, [id]);

  // Handle song Updates
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://67cfa24e823da0212a82daef.mockapi.io/api/Songs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    })
      .then(() => navigate("/songs")) // Redirect to Songs page after update
      .catch((error) => console.error("Error updating song:", error));
  };

  // returns all data in a container with bootstrap elements configured. 
  
  return (
    <div className="edit-container">
      <h2>Edit Song</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={song.title} onChange={(e) => setSong({ ...song, title: e.target.value })} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control type="text" value={song.album} onChange={(e) => setSong({ ...song, album: e.target.value })} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Band</Form.Label>
          <Form.Control type="text" value={song.band} onChange={(e) => setSong({ ...song, band: e.target.value })} required />
        </Form.Group>
        <Button type="submit" className="btn-update">Update Song</Button>
      </Form>
    </div>
  );
};

export default EditSong;
