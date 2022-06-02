import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../styles/entradaAmpliada.css'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const EntradaAmpliada = ({credentials}) => {

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

    const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const getComentarios = async () => {
        const url = "http://localhost:8080/comentarios";
        const res = await fetch(url);
        const comentarios = await res.json();
    
        setComentarios(comentarios)
    }
    getComentarios()
  }, []);
  

    return (
        <div className='contenedor'>
            <div className='titulo'>{entradaAmpliada.titulo}</div>
            <p className='contenido'>{entradaAmpliada.texto} </p>
            
            <div className='comentario'>
                {comentarios.length > 0 ? (
                    comentarios.map((comentario) => (
                    <tr key={`comentario.id`}>

                        <td></td>
                        <td className='comentario-bloque'>{comentario.texto}</td>
                        <td className='comentario-separador'></td>
                        
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan={3}>No hay comentarios</td>
                    </tr>
                )}
                
                <div className="container mt-4 mb-2">
                    <Button Link as={Link} to={"/crearComentario"} variant="warning" size="sm">
                        Crear Comentario
                    </Button>
                </div>
            </div>
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
