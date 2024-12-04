import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import "./theme.css";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkTheme ? (
        <FaSun className="theme-icon" style={{ fontSize: "18px" }} />
      ) : (
        <FaMoon
          className="theme-icon"
          style={{ color: "#fff", fontSize: "18px" }}
        />
      )}
    </button>
  );
};
