// App.jsx
import { useState } from "react";
import StudySpaceList from "./StudySpaceList";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const studySpaces = [
    { id: 1, name: "Lydon Library", description: "Offers quiet study spaces as well as group work space" },
    { id: 2, name: "Starbucks Cafe", description: "Good coffee, limited seating" },
    { id: 3, name: "Southwick Quad", description: "Fresh air, great for group discussions" },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="app">
      <h1>📚 StudyHere</h1>
      <StudySpaceList
        spaces={studySpaces}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
