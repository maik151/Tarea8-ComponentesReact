import React from 'react'

export const FormularioComponent = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="p-3 border rounded bg-light">
      {children}
    </form>
  )
}
