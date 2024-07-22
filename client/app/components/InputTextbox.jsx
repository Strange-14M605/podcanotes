import React from 'react';

const InputTextbox = ({ label, placeholder, value, onChange, required }) => {
  return (
    <label className="input input-bordered flex items-center gap-4 my-2">{label}:
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default InputTextbox;