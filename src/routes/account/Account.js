import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import "./account.css";
import MyProfile from "../../components/myProfile/MyProfile";

function Account() {
  return (
    <div className="account">
      <div className="account-left">
        <h3>Manage My Account</h3>
        <ul className="account-list">
          <li>
            <NavLink to="myprofile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/addressbook">Address Book</NavLink>
          </li>
          <li>
            <NavLink to="mypaymentoption">My Payment Options</NavLink>
          </li>
        </ul>
        <h3>My Orders</h3>
        <ul className="account-list">
          <li>
            <NavLink to="myreturn">My Returns</NavLink>
          </li>
          <li>
            <NavLink to="mycancellation">My Cancellations</NavLink>
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
