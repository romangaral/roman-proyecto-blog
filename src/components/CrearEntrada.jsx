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

//-----------------------------------------------------------------------------------------------

// import React from 'react';
// import axios from 'axios';

// export default class CrearEntrada extends React.Component {
//   state = {
//     titulo: '',
//     texto: ''
//   }

//   handleChange = event => {
//     this.setState({ titulo: event.target.value, texto: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       titulo: this.state.titulo,
//       texto: this.state.texto
//     };

//     axios.post(`http://localhost:8080/entradas`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <>
//       <MenuAdmin/>
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             titulo:
//             <input type="text" name="titulo" onChange={this.handleChange} />
//           </label>
//           <label>
//             texto:
//             <input type="text" name="texto" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//       </>
//     )
//   }
// }

//------------------------------------------------------------------------------------------------

// import axios from "axios";
// import React from "react";

// const baseURL = "http://localhost:8080/entradas";

// export default function App() {
//   //const [post, setPost] = React.useState(null);

//     const [post, setPost] = React.useState({
//     titulo: "",
//     texto: "",
//     valoracion: ""
//   });

//   React.useEffect(() => {
//     axios.get(`${baseURL}`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//     const onChange = (e) => {
//     setPost({
//       ...post,
//       [e.target.name]: e.target.value,
//     });
//   };

//   function createPost() {
//     axios
//       .post(baseURL, {
//         post
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!";

//   return (
//     <>
//       <MenuAdmin />
//       <div>
//         {/* <h1>{post.titulo}</h1>
//       <p>{post.texto}</p> */}
//         <label>
//           titulo:
//           <input type="text" name="titulo" value={post.titulo} onChange={onChange}/>
//         </label>
//         <label>
//           texto:
//           <input type="text" name="texto" value={post.texto} onChange={onChange}/>
//         </label>
//         <button onClick={createPost}>Create Post</button>
//       </div>
//     </>
//   );
// }
