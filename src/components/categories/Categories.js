import React, { useState, useEffect } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { dataJson, isLoading, isError } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data. Please try again later.</p>;
  }

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
        {dataJson &&
          dataJson
            .filter((item) => item.category === "homeCate")
            .map((category) => (
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
