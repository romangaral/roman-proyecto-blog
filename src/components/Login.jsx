import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../styles/login.css";

function Login({ setCredentials, credentials }) {

  const [usuario, setUsuario] = useState({
    nombre: "",
    password: "",
  });

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //fetch(`http://localhost:8080/usuarios/login`, {
      fetch(`https://romangarcia-back-mysql.herokuapp.com/usuarios/login`, {
      headers: {
        Authorization: `BASIC ${btoa(usuario.nombre + ":" + usuario.password)}`,
      },
    })
    .then((response) => {
      
      return response.json();
    })
      .then((userSrv) => {
        console.log(credentials.rol);
        setCredentials({
          header: `BASIC ${btoa(usuario.nombre + ":" + usuario.password)}`,
          rol: userSrv.rol.tipo,
          isLogged: true,
          nombre: usuario.nombre,
        });
      });
  };

  if (credentials.rol === "ANONYMOUS"){
    return (
      <Form className="loginForm" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Nombre usuario</Form.Label>
          <Form.Control type="text"
                    name="nombre"
                    placeholder="Nombre: " 
                    value={usuario.nombre} 
                    onChange={onChange}/>      
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
                    name="password"
                    placeholder="Contraseña: "
                    value={usuario.password}
                    onChange={onChange} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Inicia Sesion
        </Button>
      </Form>

    );
  }else{
    if (credentials.rol === "ROL_USER") {
      return <Redirect to="/blog" />;}
      else {
        return <Redirect to="/" />;
      }
  } 
 
}

export default Login;
