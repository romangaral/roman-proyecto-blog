import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MenuAdmin from "./MenuAdmin";

function CrearEntrada() {
  const [entrada, setEntrada] = useState({
    titulo: "",
    texto: "",
    valoracion: ""
  });

  const onChange = (e) => {
    setEntrada({
      ...entrada,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:8080/entradas`, {
      method: "POST",
      body: JSON.stringify(entrada),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data)
  };

  return (
    <>
      <MenuAdmin />

      <Form className="container mt-4" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            name="titulo"
            placeholder="titulo de la entrada"
            value={entrada.titulo}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Texto de la Entrada</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="texto"
            value={entrada.texto}
            onChange={onChange}
          />
        </Form.Group>

        <Button type="submit" variant="outline-success">
          Guardar Post
        </Button>
      </Form>
    </>
  );
}

export default CrearEntrada;
