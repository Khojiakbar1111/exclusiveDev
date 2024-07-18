import React, { useEffect, useState } from "react";
import "./categories.css";
import axios from "axios";

const Categories = () => {
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
        <div className="category-cart"></div>
      </div>
    </section>
  );
};

export default Categories;
