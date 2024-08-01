import { useLocation, Link, NavLink } from "react-router-dom";
import "./breadCrumbs.css";

function BreadCrumbs() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink.join("")}>{crumb}</NavLink>
        </div>
      );
    });
  return (
    <div className="breadCrumbs">
      <p>{crumbs}</p>
    </div>
  );
}

export default BreadCrumbs;
