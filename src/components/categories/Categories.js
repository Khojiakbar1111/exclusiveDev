import React, { useState, useEffect } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="categories">
      <div className="category-cate">
        <div className="cate"></div>
        <p>Categories</p>
      </div>
      <div className="categories-title">
        <h1>Browse By Category</h1>
        <div className="categories-btns">
          <button>
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button>
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
      <div className="category-box">
        {categories &&
          categories.map((category) => (
            <div key={category.id} className="category-cart">
              <Link className="category-img" to={category.link}>
                <img src={category.image} alt={category.name} />
              </Link>
              <h3>{category.name}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
