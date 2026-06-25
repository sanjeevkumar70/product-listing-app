import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);

    if (!product) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="detail-page">
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                <IoIosArrowRoundBack size={25} />
                Back
            </button>

            <div className="detail-container">
                <div className="detail-image">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </div>

                <div className="detail-info">
                    <h1>{product.title}</h1>

                    <div className="price-section">
                        <span className="price">
                            ${product.price}
                        </span>
                        <span className="rating"> 
                            {Array.from({ length: product.rating }, (_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            &nbsp;({product.rating})
                        </span>
                    </div>

                    <div className="meta">
                        <p>
                            <strong>Brand:</strong>
                            {product.brand}
                        </p>
                        <p>
                            <strong>Category:</strong>
                            {product.category}
                        </p>
                    </div>

                    <div className="description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className="reviews">
                        <h3>Reviews</h3>
                        {
                            product?.reviews?.map((item, index) => (
                                <div className="review-wrapper" key={index}>
                                    <p className="name-rating">
                                        <strong>{item.reviewerName}</strong>{" "}
                                        <span>
                                            {Array.from({ length: item.rating }, (_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                            &nbsp;({item.rating})
                                        </span>
                                    </p>
                                    <p className="rating-desc">{item.comment}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}