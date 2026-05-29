import { useState } from "react";

export default function RatingWidget() {
  const [mode, setMode] = useState("button");
  const [rating, setRating] = useState(4.0);
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit() {
    setSubmitted(rating);
    setMode("button");
  }

  function starDisplay(value) {
    const fullStars = Math.round(value);
    return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  }

  if (mode === "input") {
    return (
      <div className="rating-input-row">
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="star-range"
        />
        <span className="star-display">{rating.toFixed(1)} / 5</span>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={() => setMode("button")}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-sm btn-ghost"
      onClick={() => setMode("input")}
    >
      {submitted !== null ? (
        <>
          {starDisplay(submitted)} {submitted.toFixed(1)} Edit Review
        </>
      ) : (
        "☆ Leave Review"
      )}
    </button>
  );
}
