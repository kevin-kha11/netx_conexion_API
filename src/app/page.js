"use client"; 
import  { React, useEffect, useState } from 'react'
import{ getOpciones } from './api_petition' //importacion de la funcion que hace la peticion en el archivo api_petitions.js

const page = () => {
  //Este es un hook para guardar los datos de la peticion get con axios hacia la API
  const [data, setData] = useState([])
  //este hook nos ayuda a hacer la peticion de manera automatica
  useEffect(() => {
    //llamamos el metodo para hacer la peticion a la API
    getOpciones(setData)
  }, [])
  
  return (
    <div>
      {
        data.map(arreglo => //con el map llenamos las opciones
          <ul key={arreglo.id_opcion}>
              <li>
                <a href={arreglo.ruta}> 
                  {arreglo.opcion}
                </a>
              </li>
          </ul> 
        )
      }
    </div>
  )
}

/*nota importante, no cambies los nombres que van despues del arreglo. ya que si llegas a 
poner arreglo.id en lugar de arreglo.id_opcion te marcara error, eso aplica para todo lo demas*/

//id_opcion, opcion y ruta son los atributos que asi estan nombrados en la API por eso debe ir asi tal cual

export default page