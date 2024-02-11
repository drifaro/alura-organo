import React from "react";
import "./Button.css";

export const Button = ({ children }) => (
  <button className="createCard" type="submit">
    {children}
  </button>
);
