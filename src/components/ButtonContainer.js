import React from "react";
import Button from "./Button";
import "./ButtonContainer.css";

const ButtonContainer = ({ buttons }) => {
  return (
    <section className="button-container">
      {buttons &&
        buttons.map((button, i) => <Button key={i} button={button} />)}
    </section>
  );
};

export default ButtonContainer;
