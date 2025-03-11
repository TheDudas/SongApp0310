
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";


const AddSong = () => {
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [band, setBand] = useState("");
    const navigate = useNavigate();
  
    const handleAddSong = (e) => {
      e.preventDefault();
  
      // Basic validation
      if (title.length < 3 || album.length < 3 || band.length < 3) {
        alert("All fields must have at least 3 characters.");
        return;
      }
  
      const newSong = { title, album, band };
  
      fetch("https://67cfa24e823da0212a82daef.mockapi.io/api/Songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSong),
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/songs"); // Redirect to the song list after adding
        })
        .catch((error) => console.error("Error adding song:", error));
    };
  
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Card className="shadow-lg p-4" style={{ width: "40rem" }}>
          <h2 className="text-center mb-4">Add a New Song</h2>
          <Form onSubmit={handleAddSong}>
            <Form.Group className="mb-3">
              <Form.Label>Song Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter song title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Album Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter album name"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
              />
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Band Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter band name"
                value={band}
                onChange={(e) => setBand(e.target.value)}
                required
              />
            </Form.Group>
  
            <div className="d-flex justify-content-between">
              <Button variant="success" type="submit">
                Add Song
              </Button>
              <Button variant="secondary" onClick={() => navigate("/songs")}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    );
  };
  
  export default AddSong;