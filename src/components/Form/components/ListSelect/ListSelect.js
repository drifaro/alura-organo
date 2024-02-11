import React from "react";
import "./ListSelect.css";

export const ListSelect = ({
  isChange,
  label,
  isRequired,
  fieldValue,
  options,
}) => {
  const onFieldChange = (field) => {
    isChange(field.target.value);
  };
  return (
    <div className="select-field">
      <label htmlFor="select">
        {label}
        <select
          required={isRequired}
          value={fieldValue}
          onChange={onFieldChange}
          name="time-list-select"
          id="select"
        >
          <option value="">Selecione seu time...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
