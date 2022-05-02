import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../styles/contacto.css";
import Footer from "./Footer";

function Contacto() {
  return (
    <>
      <div className="formulario">
        <div>
          <h2>Contactanos</h2>
        </div>
        <Form className="m-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder=" email" />
            <Form.Text className="text-muted">
              Nunca compartas tu email.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
