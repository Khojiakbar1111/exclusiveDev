import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./account.css";

function Account() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("myprofile");
  }, [navigate]);

  return (
    <div className="account">
      <div className="account-left">
        <h3>Manage My Account</h3>
        <ul className="account-list">
          <li>
            <NavLink
              to="myprofile"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addressbook"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Address Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mypaymentoption"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              My Payment Options
            </NavLink>
          </li>
        </ul>
        <h3>My Orders</h3>
        <ul className="account-list">
          <li>
            <NavLink
              to="myreturn"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              My Returns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mycancellation"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              My Cancellations
            </NavLink>
          </li>
        </ul>
        <h3>My Wishlists</h3>
      </div>
      <div className="account-right">
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
