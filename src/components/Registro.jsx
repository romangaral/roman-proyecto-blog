import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { keyBy } from "lodash";

const Registro = () => {

    const [usuario, saveUsuario] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        confirm: "",
      });
      const [errors, setErrors] = useState({});
      const [isRegistry, setRegistry] = useState(false);
    
      const onChange = (e) => {
        saveUsuario({
          ...usuario,
          [e.target.nombre]: e.target.value,
        });
      };
    
      //Cuando el usuario quiere registrarse
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
        if (response.ok) {
          console.log(data);
          setRegistry(true);
        } else {
          let newErrors = keyBy(data, (error) => error.field);
          console.log(newErrors);
          setErrors(newErrors);
        }
      };

      if (!isRegistry) {
        return (
          <div className="registry container-fluid">
            <div className="registry row">
              <div className="registry col-md-12">
                <div className="registryFormTitle">
                  <h1 className="title">REGISTRO</h1>
                </div>
              </div>
            </div>
            <div className="registryForm row">
              <div className="registry col-md-12">
                <Form className="registration" onSubmit={onSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nombre: "
                      value={usuario.nombre}
                      onChange={onChange}
                      isInvalid={errors.nombre}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nombre?.defaultMessage}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicSurnames">
                    <Form.Control
                      type="text"
                      name="surnames"
                      placeholder="Apellidos: "
                      value={usuario.apellidos}
                      onChange={onChange}
                      isInvalid={errors.apellidos}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.apellidos?.defaultMessage}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email: "
                      value={usuario.email}
                      onChange={onChange}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.defaultMessage}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Contraseña: "
                      value={usuario.password}
                      onChange={onChange}
                      isInvalid={errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.defaultMessage}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirm">
                    <Form.Control
                      type="password"
                      name="confirm"
                      placeholder="Confirma tu Contraseña: "
                      value={usuario.confirm}
                      onChange={onChange}
                      isInvalid={errors.confirm}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirm?.defaultMessage}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="outline-success">
                    Registrarse
                  </Button>
                  <Link to={"/"} className="returLink">
                    <Button variant="outline-success">Cancelar</Button>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        );
      } else {
        return <Redirect to="/login" />;
      }
};

export default Registro;
