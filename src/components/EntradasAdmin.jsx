import React, { useState, useEffect } from "react";
import getEntradas from "../helpers/getEntradas";
import MenuAdmin from "./MenuAdmin";
import { Table, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

function EntradasAdmin() {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    updateEntradas();
  }, []);

  const updateEntradas = () => {
    getEntradas().then((newEntradas) => {
      setEntradas(newEntradas);
    });
  };

  const deleteEntrada = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/entradas/${id}`,{
      method:"DELETE"
    })
      .then((response)=>{
        if(response.ok){
          setEntradas(entradas.filter(entrada => entrada.id !== id))
        }else{
          alert("Error al borrar una entrada");
        }
      });
    }

  return (
    <>
      <MenuAdmin />

      <div className="container mt-4 mb-2">
        <Button Link as={Link} to={"/crearEntrada"} variant="secondary" size="lg">
          Crear Entrada
        </Button>
      </div>

      <Table striped bordered hover className="container mt-4">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Texto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entradas.length > 0 ? (
            entradas.map((entrada) => (
              <tr key={`entrada.id`}>
                <td>{entrada.titulo}</td>
                <td>{entrada.texto}</td>
                <td>
                    <button className="button" onClick={() => {deleteEntrada(entrada.id)}} >
                        Borrar
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay Entradas</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default EntradasAdmin;
