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

  return (
    <>
      <MenuAdmin />

      <Table striped bordered hover className="container mt-4">
        <thead>
          <tr>
            <th>Texto</th>
            <th>id Usuario</th>
            <th>id Entrada</th>
          </tr>
        </thead>
        <tbody>
          {comentarios.length > 0 ? (
            comentarios.map((comentario) => (
              <tr key={`comentario.id`}>
                <td>{comentario.texto}</td>
                <td></td>
                <td></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay Anunciantes</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default ComentariosAdmin;