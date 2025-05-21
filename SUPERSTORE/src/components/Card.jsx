import "./card.css";
import React from "react";

export default function Card({ product }) {
  const { id, title, price, rating, category, image } = product;

  return (
    
        <div className="card" key={id}>
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
            <h2 className="card-title">{title}</h2>
                <div className="card-details">
                    <p className="card-rating">Rating: {rating.rate} ({rating.count})</p>
                    <p className="card-category">{category}</p>
                </div>
                <p className="card-price">${price}</p>
            <button className="card-button">Add to Cart</button>
            </div>
        </div>
    
  );
}