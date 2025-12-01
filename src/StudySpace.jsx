// StudySpace.jsx
export default function StudySpace({ name, description, isFavorite, onFavorite }) {
  return (
    <div className="study-space">
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onFavorite}>
        {isFavorite ? "★ Reserved!" : "☆ Click to Reserve"}
      </button>
    </div>
  );
}
