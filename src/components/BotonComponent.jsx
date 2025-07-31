import React from 'react'

export const BotonComponent = ({texto, onClick}) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {texto}
    </button>
  )
}
