import React from 'react'

export const TituloComponent = ({texto,nivel}) => {

  const HeadingTag = ['h1','h2','h3','h4','h5','h6'].includes(`h${nivel}`) ? `h${nivel}` : 'h1';

  // HeadingTag ahora es un string con la etiqueta, React acepta esto
  // al usarlo como componente dinámico con mayúscula inicial

  return <HeadingTag>{texto}</HeadingTag>;
}

