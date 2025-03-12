import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

//imports bootstrap components and then runs functions for Songs. fetches from mockapi stores entries and retrieves as required.

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://67cfa24e823da0212a82daef.mockapi.io/api/Songs")
      .then((res) => res.json())
      .then((data) => {
        // Filters out all data that contain random letters or symbols

        const cleanedSongs = data.filter((song) =>
            /^[A-Za-z0-9\s]+$/.test(song.title) &&
            /^[A-Za-z0-9\s]+$/.test(song.album) &&
            /^[A-Za-z0-9\s]+$/.test(song.band) &&
            song.title.length > 2 &&
            song.album.length > 2 &&
            song.band.length > 2
          );
          

        setSongs(cleanedSongs);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);
  //checks for errors and catches with message of where error is. 

  // deletes song by ID

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      fetch(`https://67cfa24e823da0212a82daef.mockapi.io/api/songs/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          // Update state by removing deleted song
          setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
        })
        .catch((error) => console.error("Error deleting song:", error));
    }
  };

// displays song data with container using card body for each ID and adds shadow effects through bootstrap. 
  return (
    <Container fluid className="mt-4">
      <h2 className="text-center mb-4">Song List</h2>
      <Row className="justify-content-center">
        {songs.map((song) => (
          <Col md={4} sm={6} xs={12} key={song.id} className="mb-4">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Album: {song.album}</Card.Subtitle>
                <Card.Text>Band: {song.band}</Card.Text>
                <Button variant="primary" as={Link} to={`/edit/${song.id}`} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(song.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="success" as={Link} to="/add">
          Add New Song
        </Button>
      </div>
    </Container>
  );
};

export default Songs;