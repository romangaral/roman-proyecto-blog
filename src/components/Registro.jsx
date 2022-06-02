import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../styles/registro.css";

const Registro = () => {
  const [usuario, saveUsuario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  });
  //const [errors, setErrors] = useState({});
  const [isRegistry, setRegistry] = useState(false);

  const onChange = (e) => {
    saveUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Registro del usuario
  const onSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:8080/usuarios`, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    // if (response.ok) {
    //   console.log(data);
    //   setRegistry(true);
    // } else {
    //   let newErrors = keyBy(data, (error) => error.field);
    //   console.log(newErrors);
    //   setErrors(newErrors);
    // }
  };

  if (!isRegistry) {
    return (
      <Form className="loginForm" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre: "
            value={usuario.nombre}
            onChange={onChange}
          />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            name="apellidos"
            placeholder="Apellidos: "
            value={usuario.apellidos}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Email: "
            value={usuario.email}
            onChange={onChange}
          />
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña: "
            value={usuario.password}
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
      
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Registro;
