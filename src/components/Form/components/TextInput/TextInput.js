import React from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const placeholderModifier = `Digite seu ${props.label.toLowerCase()}...`;

  const onFieldChange = (field) => {
    props.isChange(field.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor="inputField">{props.label}</label>
      <input
        id="inputField"
        value={props.fieldValue}
        onChange={onFieldChange}
        required={props.isRequired}
        placeholder={placeholderModifier}
      />
    </div>
  );
};
