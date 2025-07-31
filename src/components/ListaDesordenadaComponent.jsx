import React from 'react'

export const ListaDesordenadaComponent = ({elementos}) => {
  return (
    <ul>
      {elementos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  
}
