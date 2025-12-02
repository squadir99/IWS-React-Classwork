export default function StudySpace({ 
  name, 
  description, 
  capacity, 
  currentReservations, 
  onBookSlot 
}) {
  
  const isFull = currentReservations >= capacity;

  return (
    <div className="study-space">
      <h2>{name}</h2>
      <p>{description}</p>
      
      {/* Display current status */}
      <p>
        Status: {currentReservations} / {capacity} slots reserved.
      </p>

      <button 
        onClick={onBookSlot} 
        disabled={isFull} // Disable button if full
      >
        {isFull ? "Fully Booked!" : "Click to Reserve 1 Slot"}
      </button>
    </div>
  );
}