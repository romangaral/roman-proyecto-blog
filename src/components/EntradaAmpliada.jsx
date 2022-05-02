import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../styles/entradaAmpliada.css'

const EntradaAmpliada = () => {

    const {id} = useParams();
    //console.log(id);

    const [entradaAmpliada, setEntradaAmpliada] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`http://localhost:8080/entradas/${id}`)
            const users = await data.json()
            setEntradaAmpliada(users)
        }
        obtenerDatos()
    },[id])

    

    return (
        <div className='contenedor'>
            <div className='titulo'>{entradaAmpliada.titulo}</div>
            <p className='contenido'>{entradaAmpliada.texto} </p>
        </div>
    )
}

export default EntradaAmpliada

// import React, { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom';
// import getEntradasAmpliada from '../helpers/getEntradaAmpliada';

// const EntradaAmpliada = () => {

//     const {id} = useParams();
//     //console.log(id);

//     const [entradaAmpliada, setEntradaAmpliada] = useState([])

//     useEffect(() => {
//         updateEntradasAmpliada();
//     },[id])

//     const updateEntradasAmpliada = () => {
//         getEntradasAmpliada().then((newEntradas) => {
//           setEntradaAmpliada(newEntradas);
//         });
//       };

//     return (
//         <div>
//             <p>{entradaAmpliada.titulo}</p>
//             <p>{entradaAmpliada.texto} </p>
//         </div>
//     )
// }

// export default EntradaAmpliada
