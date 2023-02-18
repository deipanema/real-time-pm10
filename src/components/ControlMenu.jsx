import React from "react";

export default function ControlMenu({ list, value, onChange }) {
  return (
    <select
      className="control-menu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {list.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
