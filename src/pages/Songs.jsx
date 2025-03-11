
import React, { useEffect, useState } from "react";

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://67cfa24e823da0212a82daef.mockapi.io/api/Songs")
      .then((res) => res.json())
      .then((data) => {
        // Filter out songs where title is just random letters
        const filteredSongs = data.filter((song) => /^[A-Za-z0-9\s]+$/.test(song.title));
        setSongs(filteredSongs);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);
  

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await fetch("https://67cfa24e823da0212a82daef.mockapi.io/api/Songs");
//         if (!response.ok) throw new Error("Failed to fetch songs");

//         const data = await response.json();
//         console.log("Fetched songs:", data);

//         setSongs(data);
//       } catch (error) {
//         console.error("Error fetching songs:", error);
//       }
//     };

//     fetchSongs();
//   }, []);



  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title} - {song.band}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;










// // src/pages/Songs.jsx
// // import React from "react";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";


// useEffect(() => {
//     fetch("https://your-mockapi-url.com/songs")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched songs:", data); // Debugging: Check if data is retrieved
//         setSongs(data);
//       })
//       .catch((error) => console.error("Error fetching songs:", error));
//   }, []);
  


// const Songs = ({ songs }) => { // ✅ Receive songs as a prop
//   return (
//     <div>
//       <h2>Song List</h2>
//       <Link to="/add">
//         <Button variant="primary">Add Song</Button>
//       </Link>
//       <div className="mt-3">
//         {songs.length === 0 ? (
//           <p>No songs added yet.</p>
//         ) : (
//           songs.map((song, index) => (
//             <Card key={index} className="mb-3">
//               <Card.Body>
//                 <Card.Title>{song.title}</Card.Title>
//                 <Card.Text><strong>Album:</strong> {song.album}</Card.Text>
//                 <Card.Text><strong>Band:</strong> {song.band}</Card.Text>
//                 {/* ✅ Add Edit button */}
//                 <Link to={`/edit/${index}`}>
//                   <Button variant="warning" className="me-2">Edit</Button>
//                 </Link>
//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Songs;
