import React from "react";
import "./ListSelect.css";

export const ListSelect = (list) => {
  const onFieldChange = (field) => {
    list.isChange(field.target.value);
  };
  return (
    <div className="select-field">
      <label htmlFor="select">
        {list.label}
        <select
          required={list.isRequired}
          value={list.fieldValue}
          onChange={onFieldChange}
          name="time-list-select"
          id="select"
        >
          {list.itens.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
