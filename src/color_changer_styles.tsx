import React from "react";

export const themes = {
  orange: {
    color: "white",
    background: "orange",
    padding: "5px",
  },
  light: {
    color: "orange",
    background: "white",
    padding: "5px",
  },
};

const ThemeContext = React.createContext(themes.orange);

export default ThemeContext;
