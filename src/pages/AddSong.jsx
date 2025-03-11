
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSong = () => {
  const [song, setSong] = useState({ title: "", album: "", band: "" });
  const navigate = useNavigate();

  const handleAddSong = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://67cfa24e823da0212a82daef.mockapi.io/api/Songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       
        body: JSON.stringify(song),
      });

      console.log(JSON.stringify(song));

      if (!response.ok) {
        throw new Error("Failed to add song");
      }

      navigate("/songs"); // Redirect back to song list
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  return (
    <form onSubmit={handleAddSong}>
      <label>Title:</label>
      <input
        type="text"
        value={song.title}
        onChange={(e) => setSong({ ...song, title: e.target.value })}
        required
      />

      <label>Album:</label>
      <input
        type="text"
        value={song.album}
        onChange={(e) => setSong({ ...song, album: e.target.value })}
        required
      />

      <label>Band:</label>
      <input
        type="text"
        value={song.band}
        onChange={(e) => setSong({ ...song, band: e.target.value })}
        required
      />

      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, Form } from "react-bootstrap";

// const AddSong = ({ onAddSong }) => { // ✅ Receive onAddSong as a prop
//   const navigate = useNavigate();
//   const [song, setSong] = useState({ title: "", album: "", band: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddSong(song); // ✅ Call function to update song list
//     navigate("/songs"); // ✅ Redirect to song list
//   };

//   const handleAddSong = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("https://your-mockapi-url.com/songs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(song),
//       });
  
//       if (!response.ok) throw new Error("Failed to add song");
  
//       const newSong = await response.json();
//       console.log("Added song:", newSong); // Debugging: Check if it's saved
  
//       navigate("/songs"); // Redirect after successful save
//     } catch (error) {
//       console.error("Error adding song:", error);
//     }
//   };
  


//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           type="text"
//           value={song.title}
//           onChange={(e) => setSong({ ...song, title: e.target.value })}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Album</Form.Label>
//         <Form.Control
//           type="text"
//           value={song.album}
//           onChange={(e) => setSong({ ...song, album: e.target.value })}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Band</Form.Label>
//         <Form.Control
//           type="text"
//           value={song.band}
//           onChange={(e) => setSong({ ...song, band: e.target.value })}
//           required
//         />
//       </Form.Group>
//       <Button type="submit">Add Song</Button>
//     </Form>
//   );
// };

// export default AddSong;

