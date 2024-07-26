import { Link } from "react-router-dom";
import "./ourProducts.css";

const OurProducts = () => {
  return (
    <section className="ourProducts">
      <div className="best-cate">
        <div className="cate"></div>
        <p>Our Products</p>
      </div>
      <div className="best-title">
        <h1>Explore Our Products</h1>
        <Link to="/viewall">View All</Link>
      </div>
    </section>
  );
};

export default OurProducts;
