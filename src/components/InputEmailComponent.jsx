import React from 'react'

export const InputEmailComponent = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className || ''}`}
    />
  )
}
