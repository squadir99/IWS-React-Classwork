import { useState } from 'react';
import StudySpaceList from './StudySpaceList';
import './App.css'; 

// 1. Updated Data with 'campus' property and new locations
const initialSpaces = [
  // North Campus
  { id: 1, name: "Lydon Library", description: "Offers quiet study spaces as well as group work space", capacity: 5, campus: "North" },
  { id: 2, name: "Starbucks Cafe", description: "Good coffee, limited seating", capacity: 2, campus: "North" },
  { id: 3, name: "Southwick Quad", description: "Fresh air, great for group discussions", capacity: 3, campus: "North" },
  
  // East Campus
  { id: 4, name: "Fox Dining Hall", description: "Busy atmosphere, large tables", capacity: 8, campus: "East" },
  { id: 5, name: "Campus Rec Center", description: "Lounge area near the gym", capacity: 4, campus: "East" },
  
  // South Campus
  { id: 6, name: "South Dining Commons", description: "Good for lunch meetings", capacity: 6, campus: "South" },
  { id: 7, name: "O'Leary Library", description: "Strictly quiet study area", capacity: 4, campus: "South" },
  { id: 8, name: "Riverview Suites", description: "Study lounge with river view", capacity: 3, campus: "South" },
];

export default function App() {
  // State for reservations (counts per space ID)
  const [reservations, setReservations] = useState(
    initialSpaces.reduce((acc, space) => ({ ...acc, [space.id]: 0 }), {})
  );

  // 2. NEW State: Track which campus is currently selected
  const [selectedCampus, setSelectedCampus] = useState("North");

  const handleBookSlot = (spaceId) => {
    const space = initialSpaces.find(s => s.id === spaceId);
    const currentCount = reservations[spaceId];
    if (currentCount < space.capacity) {
      setReservations(prev => ({ ...prev, [spaceId]: currentCount + 1 }));
    } else {
      console.log(`${space.name} is full!`);
    }
  };

  const handleCancelSlot = (spaceId) => {
    const currentCount = reservations[spaceId];
    if (currentCount > 0) {
      setReservations(prev => ({ ...prev, [spaceId]: currentCount - 1 }));
    }
  };

  // 3. Filter the spaces based on the selected campus
  const filteredSpaces = initialSpaces.filter(space => space.campus === selectedCampus);

  // Merge status into the filtered list
  const spacesWithStatus = filteredSpaces.map(space => ({
      ...space,
      currentReservations: reservations[space.id],
  }));

  return (
    <div className="app-container">
      <h1>StudyHere</h1>

      {/* 4. UI: Campus Selection Buttons */}
      <div className="campus-selector">
        <button 
          className={selectedCampus === "North" ? "active" : ""} 
          onClick={() => setSelectedCampus("North")}
        >
          North Campus
        </button>
        <button 
          className={selectedCampus === "South" ? "active" : ""} 
          onClick={() => setSelectedCampus("South")}
        >
          South Campus
        </button>
        <button 
          className={selectedCampus === "East" ? "active" : ""} 
          onClick={() => setSelectedCampus("East")}
        >
          East Campus
        </button>
      </div>

      <h2>Viewing: {selectedCampus} Campus</h2>

      <StudySpaceList
        spaces={spacesWithStatus}
        onBookSlot={handleBookSlot}
        onCancelSlot={handleCancelSlot}
      />
    </div>
  );
}