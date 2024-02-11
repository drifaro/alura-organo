import React from "react";
import "./TextInput.css";

export const TextInput = ({ isChange, label, fieldValue, isRequired }) => {
  const placeholderModifier = `Digite seu ${label.toLowerCase()}...`;

  const onFieldChange = (field) => {
    isChange(field.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor="inputField">{label}</label>
      <input
        id="inputField"
        value={fieldValue}
        onChange={onFieldChange}
        required={isRequired}
        placeholder={placeholderModifier}
      />
    </div>
  );
};
