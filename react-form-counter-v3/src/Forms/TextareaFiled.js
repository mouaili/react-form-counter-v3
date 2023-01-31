import React, { useId } from 'react';

function TextareaFiled({ description, placeholder, value, onChange }) {
  const id = useId();

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{description}</label>
      <textarea
        id={id}
        value={value}
        className='form-control'
        rows='3'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}

export default TextareaFiled;
