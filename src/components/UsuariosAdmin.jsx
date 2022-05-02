import React, { useState, useEffect } from "react";
import getUsuarios from "../helpers/getUsuarios";
import MenuAdmin from "./MenuAdmin";
import { Table } from "react-bootstrap";

function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    updateUsuarios();
  }, []);

  const updateUsuarios = () => {
    getUsuarios().then((newUsuarios) => {
      setUsuarios(newUsuarios);
    });
  };

  // const deleteUser = (id) => {
  //   console.log(id);
  //   setUsuarios(usuarios.filter(usuario => usuario.id !== id))
  // }

  const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/usuarios/${id}`,{
      method:"DELETE"
    })
      .then((response)=>{
        if(response.ok){
          setUsuarios(usuarios.filter(usuario => usuario.id !== id))
        }else{
          alert("Error al borrar un Usuario");
        }
      });
    
  }

  return (
    <>
      <MenuAdmin />
      <Table striped bordered hover className="container mt-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Password</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <tr key={`usuario.id`}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellidos}</td>
                <td>{usuario.email}</td>
                <td>{usuario.password}</td>
                <td>
                    <button className="button" onClick={() => {deleteUser(usuario.id)}} >
                        Borrar
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay Usuarios</td>
            </tr>
          )}
        </tbody>
      </Table>
      
    </>
  );
}

export default UsuariosAdmin;

