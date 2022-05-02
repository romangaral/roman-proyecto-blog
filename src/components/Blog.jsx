import React, { Fragment, useState, useEffect } from "react";
import getEntradas from "../helpers/getEntradas";
import { Link } from 'react-router-dom';
import '../styles/blog.css'

function Blog() {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    updateEntradas();
  }, []);

  const updateEntradas = () => {
    getEntradas().then((newEntradas) => {
      setEntradas(newEntradas);
    });
  };

  return (
    <Fragment>
      {entradas.length > 0 ? (
            entradas.map((entrada) => (
              <div className="container entrada" key={`entrada.idEntradas`}>
                <h2 className="titulo-blog text-center mt-4">{entrada.titulo}</h2>
                <p className="texto-blog">{entrada.texto}</p>
                <div className="text-center">
                <Link className="boton" to={`/entradaAmpliada/${entrada.id}`}>Leer mas..</Link>
              </div>
              </div>
            ))
          ) : (
            <div>
              <p colSpan={3}>No hay entradas</p>
            </div>
          )}
    </Fragment>
  );
}

export default Blog;
