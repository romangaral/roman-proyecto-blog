// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button } from "react-bootstrap";
// import '../styles/contacto.css';
// import Footer from "./Footer";

// function Login() {
//   return (
//     <>
//     <div className="formulario">
//       <Form className="m-5">
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

function Login({ setCredentials, credentials }) {

  const [usuario, loginUser] = useState({
    alias: "",
    password: "",
  });

  //Función que coloca los nuevos elementos en el estado de user
  const onChange = (e) => {
    loginUser({
      ...usuario,
      [e.target.nombre]: e.target.value,
    });
  };
  
  //Función que se ejecuta cuando el usuario quiere loguearse
  const onSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/usuarios/login`, {
      headers: {
        Authorization: `BASIC ${btoa(usuario.nombre + ":" + usuario.password)}`,
      },
    })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            `Error en petición HTTP: ${response.status} - ${response.statusText}`
          );
        return response.json();
      })
      .then((userSrv) => {
        setCredentials({
          header: `BASIC ${btoa(usuario.nombre + ":" + usuario.password)}`,
          rol: userSrv.rol.tipo,
          isLogged: true,
          nombre: usuario.nombre,
        });
      });
  };

  
    return (
      <div className="login container-fluid">
        <div className="login row">
          <div className="login col-md-12">
            <div className="loginFormTitle">
              <h1 className="title">Inicia Sesión</h1>
            </div>
          </div>
        </div>
        <div className="login row">
          <div className="login col-md-12">
            <Form className="loginForm" onSubmit={onSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="formGroupAlias">
                  <Form.Control
                    type="text"
                    name="alias"
                    placeholder="Alias: "
                    value={usuario.nombre}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="formGroupPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña: "
                    value={usuario.password}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Button type="submit" variant="outline-success">
                Iniciar Sesión
              </Button>
            </Form>
          </div>
        </div>
        <div className="login row">
          <div className="login col-md-12">
            <p>
              Si aún no estás registrado, puedes registrarte{" "}
              <Link to={"/registro"} className="registrationLink">
                AQUÍ
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default Login;