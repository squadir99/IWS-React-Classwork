// StudySpaceList.jsx (UPDATED)
import StudySpace from "./StudySpace";

// Note the change from 'onToggleFavorite' to 'onBookSlot'
export default function StudySpaceList({ spaces, onBookSlot }) {
  return (
    <div className="space-list">
      {spaces.map((space) => (
        <StudySpace
          key={space.id}
          // Pass the entire space object now, which includes name, description, capacity, and currentReservations
          {...space} 
          onBookSlot={() => onBookSlot(space.id)}
        />
      ))}
    </div>
  );
}