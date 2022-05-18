import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({ title, color, rating, id,  onRemove = f => f, onRate = f => f }) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} onRate={rating => onRate(id, rating)} />
      <StarRating selectedStars={rating} />
    </section>
  );
}