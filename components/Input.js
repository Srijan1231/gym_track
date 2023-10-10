import React from "react";

export const Input = ({ item }) => {
  return (
    <div className="mb-4">
      <label for={item.name} className="block text-gray-600">
        {item.label}
      </label>
      <input
        type={item.type}
        id={item.id}
        name={item.name}
        className={item.classNameInput}
      />
    </div>
  );
};
