import React from "react";
import "./Button.css";

export const Button = (props) => (
  <button className="createCard" type="submit">
    {props.children}
  </button>
);
