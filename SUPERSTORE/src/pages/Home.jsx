import "./home.css";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

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

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Store</h1>
        <div className="home-products">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
