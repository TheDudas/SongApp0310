// src/pages/EditSong.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const EditSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({ title: "", album: "", band: "" });

  useEffect(() => {
    fetch(`https://67cfa24e823da0212a82daef.mockapi.io/api/Songs/${id}`)
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((error) => console.error("Error fetching song:", error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://67cfa24e823da0212a82daef.mockapi.io/api/Songs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song),
      });

      if (!response.ok) throw new Error("Failed to update song");

      navigate("/songs");
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={song.title}
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album</Form.Label>
        <Form.Control
          type="text"
          value={song.album}
          onChange={(e) => setSong({ ...song, album: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Band</Form.Label>
        <Form.Control
          type="text"
          value={song.band}
          onChange={(e) => setSong({ ...song, band: e.target.value })}
          required
        />
      </Form.Group>
      <Button type="submit">Update Song</Button>
    </Form>
  );
};

export default EditSong;
