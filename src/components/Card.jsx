// import React, { Fragment, useState, useEffect } from "react";
// import getEntradas from "../helpers/getEntradas";
// import restaurante1 from "../image/restaurante1.jpg";
// import { Button } from "react-bootstrap";
// import "../styles/card.css";

// function Card({ title }) {
//   const [entradas, setEntradas] = useState([]);

//   useEffect(() => {
//     updateEntradas();
//   }, []);

//   const updateEntradas = () => {
//     getEntradas().then((newEntradas) => {
//       setEntradas(newEntradas);
//     });
//   };

//   return (
    // <Fragment>
    //   <div className="card">
    //     <img src={restaurante1} alt="" />
    //     <div className="card-body"></div>
    //     <h4 className="card-title">{title}</h4>
    //     <p className="card-text text-secondary">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
    //       consectetur asperiores vel illum qui dolorem commodi, recusandae
    //       nostrum ipsam iusto veniam omnis cupiditate aliquid sapiente aut
    //       excepturi? Nobis, ipsa vel.
    //     </p>
    //     {/* <a href="#!" className="btn btn-outline-secondary">leer mas...</a> */}
    //     <div className="text-center">
    //       <Button className="boton" variant="info" size="sm">
    //         leer mas
    //       </Button>{" "}
    //     </div>
    //   </div>
    // </Fragment>
//     <Fragment>
//       {entradas.length > 0 ? (
//         entradas.map((entrada) => (
//           <div className="card">
//             <img src={restaurante1} alt="" />
//             <div className="card-body"></div>
//             <h4 className="card-title">{entrada.titulo}</h4>
//             <p className="card-text text-secondary">{entrada.texto}</p>
//             {/* <a href="#!" className="btn btn-outline-secondary">leer mas...</a> */}
//             <div className="text-center">
//               <Button className="boton" variant="info" size="sm">
//                 leer mas
//               </Button>{" "}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>
//           <p colSpan={3}>No hay entradas</p>
//         </div>
//       )}
//     </Fragment>
//   );
// }

// export default Card;
