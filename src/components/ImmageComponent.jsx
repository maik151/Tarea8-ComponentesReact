//Importamos React para poder crear componentes
import React from 'react'

//Creamos y exportamois el componente de imagen
//Este componente es una función que retorna un div con el texto "ImageComponent"
//Definimos los props con cada atributo: src, alt, width, height
export const ImmageComponent = ({src, alt, width, height}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  )
}
