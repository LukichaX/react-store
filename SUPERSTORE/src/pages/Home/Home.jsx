import "./home.css";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <h1 className="home-title">Store</h1>
      <div className="home-container">
        <div className="home-products">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/post-details/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }} // optional styling so link doesn’t mess with card styles
            >
              <Card product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
