import React from 'react'

export const TablaComponent = ({cabecera, datos}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {cabecera.map((titulo, idx) => (
            <th key={idx}>{titulo}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, idxFila) => (
          <tr key={idxFila}>
            {fila.map((celda, idxCelda) => (
              <td key={idxCelda}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
