import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../redux/slices/language";
import "./header.css";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon

const Header = () => {
  const dispatch = useDispatch();
  const { translation, language } = useSelector((state) => state.language);

  const [darkMode, setDarkMode] = useState(false);
  // Persist dark mode setting
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(switchLanguage(selectedLanguage));
  };

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <div className="header_offer">
        <p>{translation.headerDes}</p>
        <Link to="/">{translation.headerBtn}</Link>
      </div>
      <div className="header-select_dark">
        <select
          className="header_select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
        <IconButton
          onClick={toggleDarkMode}
          color="inherit"
          style={{ color: darkMode ? "white" : "#FFFFFF" }} // Yellow for sun, white for moon
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
