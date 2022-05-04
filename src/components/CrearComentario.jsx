import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MenuAdmin from "./MenuAdmin";

function CrearComentario() {
  const [comentario, setComentario] = useState({
    texto: ""
  });

  const onChange = (e) => {
    setComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:8080/comentarios`, {
      method: "POST",
      body: JSON.stringify(comentario),
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Texto del comentario</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="texto"
            value={comentario.texto}
            onChange={onChange}
          />
        </Form.Group>

        <Button type="submit" variant="outline-success">
          Publicar comentario
        </Button>
      </Form>
    </>
  );
}

export default CrearComentario;