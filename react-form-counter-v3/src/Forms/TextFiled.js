import React, { useId } from 'react';

function TextFiled({ title, placeholder, value, onChange }) {
  const id = useId();

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        value={value}
        type='text'
        className='form-control'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}

export default TextFiled;
