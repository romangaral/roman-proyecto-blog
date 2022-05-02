import React, { useState, useEffect } from "react";
import getEntradas from "../helpers/getEntradas";
import { Link } from 'react-router-dom';
import '../styles/cards.css'

function Cards({entrada}) {
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

    <div className="container d-flex justify-content-center card">
      <div className="row">
        {entradas.length > 0 ? (
          entradas.map((entrada) => (
            <div className="card col-md-4" >
              <div className="card-body"></div>
              <h4 className="card-title text-center">{entrada.titulo}</h4>
              <p className="card-text text-secondary">{entrada.texto}</p>
              <div className="text-center">
                {/* <Button className="boton" variant="info" size="sm">
                  leer mas
                </Button> */}
                <button className="boton" variant="info">
                <Link to={`/entradaAmpliada/${entrada.id}`}>Leer mas</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p colSpan={3}>No hay entradas</p>
          </div>
        )}
      </div>
    </div>

    
  );
}

export default Cards;
