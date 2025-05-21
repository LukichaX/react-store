import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }
  if (!product) return <p className="not-found">Product not found.</p>;

  return (
    <div className="details-container">
        <div className="details-wrapper">
            <div className="post-wrapper">
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} style={{ maxWidth: "300px" }} />
                <p className="desc">{product.description}</p>
                <div className="details-info">
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
            </div>
        </div>
    </div>
  );
}
