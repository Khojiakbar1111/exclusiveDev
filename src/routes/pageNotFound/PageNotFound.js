import { Link } from "react-router-dom";
import "./pageNotFound.css";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound-box">
        <h1> 404 Not Found</h1>
        <p>You visited the page not found. You may go home page</p>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
