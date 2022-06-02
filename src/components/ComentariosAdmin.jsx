import React, { useState, useEffect } from "react";
import getComentarios from "../helpers/getComentarios";
import MenuAdmin from "./MenuAdmin";
import {Table} from "react-bootstrap";

function ComentariosAdmin() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    updateComentarios();
  }, []);

  const updateComentarios = () => {
    getComentarios().then((newComentarios) => {
      setComentarios(newComentarios);
    });
  };

  const deleteComentario = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/comentarios/${id}`,{
      method:"DELETE"
    })
      .then((response)=>{
        if(response.ok){
          setComentarios(comentarios.filter(comentarios => comentarios.id !== id))
        }else{
          alert("Error al borrar una comentario");
        }
      });
    }

  return (
    <>
      <MenuAdmin />

      <Table striped bordered hover className="container mt-4">
        <thead>
          <tr>
            <th>Texto</th>
            <th>id Usuario</th>
            <th>id Entrada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comentarios.length > 0 ? (
            comentarios.map((comentario) => (
              <tr key={`comentario.id`}>
                <td>{comentario.texto}</td>
                <td></td>
                <td></td>
                <td>
                    <button className="button" onClick={() => {deleteComentario(comentario.id)}} >
                        Borrar
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay comentarios</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default ComentariosAdmin;