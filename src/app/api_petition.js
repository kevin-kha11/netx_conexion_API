import axios from "axios" //axios es la libreria usada para hacer la conexion a la API
export const getOpciones = async (setData) => {
    // variable que vamos a utilizar para apuntar a la direccion en la que esta corriendo la API
    const endpoint = 'http://localhost:3001/opciones'
    //con esta hacemos la peticion get a la api usando axios
    const {data: res} = await axios.get(endpoint)
    setData(res)
}   