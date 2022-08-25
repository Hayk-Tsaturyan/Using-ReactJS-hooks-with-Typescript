import React, { useContext } from "react";
import ThemeContext from "./color_changer_styles";

const ColorChanger = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <p>
        We are team of innovative developers and designers that are working on
        creating disruptive technologies and services, specialized in web
        development. Our aim is to take your business into next level taking
        different approaches to make you stand out from the market
      </p>
    </div>
  );
};

export default ColorChanger;