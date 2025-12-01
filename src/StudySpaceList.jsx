// StudySpaceList.jsx
import StudySpace from "./StudySpace";

export default function StudySpaceList({ spaces, favorites, onToggleFavorite }) {
  return (
    <div className="space-list">
      {spaces.map((space) => (
        <StudySpace
          key={space.id}
          name={space.name}
          description={space.description}
          isFavorite={favorites.includes(space.id)}
          onFavorite={() => onToggleFavorite(space.id)}
        />
      ))}
    </div>
  );
}
