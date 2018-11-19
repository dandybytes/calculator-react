import React from "react";
import "./Button.css";

const Button = ({ button }) => {
  console.log(button.name);
  const style = { gridArea: button.name, color: button.color, backgroundColor: button.backgroundColor };
  return <button style={style}>{button.symbol}</button>;
};

export default Button;
