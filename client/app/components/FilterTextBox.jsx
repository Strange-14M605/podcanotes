import React from 'react';

const FilterTextbox = ({ label, placeholder, value, onChange, required }) => {
  return (
    <label className="input input-bordered flex items-center gap-4 join-item">{label}:
      <input
        type="text"
        className="grow join-item"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default FilterTextbox;