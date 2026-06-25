import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <span className="rating">
                {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i}>⭐</span>
                ))}
                &nbsp;({product.rating})
            </span>
        </div>
    );
}