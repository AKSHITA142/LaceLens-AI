import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ title, image, slug }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/category/${slug}`)}
    >
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <h4>{title}</h4>
        <span className="explore-text">Explore Collection</span>
      </div>
    </div>
  );
}
