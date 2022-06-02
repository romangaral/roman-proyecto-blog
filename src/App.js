import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Menu from "./components/Menu";
import Blog from "./components/Blog"
import UsuariosAdmin from "./components/UsuariosAdmin";
import EntradasAdmin from "./components/EntradasAdmin";
import CrearEntrada from "./components/CrearEntrada";
import CrearComentario from "./components/CrearComentario";
import ComentariosAdmin from "./components/ComentariosAdmin";
import EntradaAmpliada from "./components/EntradaAmpliada";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registro from "./components/Registro"

function App() {

  const [credentials, setCredentials] = useState({
    header: '',
    rol: 'ANONYMOUS', 
    isLogged: false,
    nombre: '',
  });


  console.log(credentials);
  return (
    <Router>
      <Menu credentials={credentials}/>
      <Switch>
        <Route exact path="/crearEntrada" component={CrearEntrada} credentials={credentials}/>
        <Route exact path="/crearComentario" component={CrearComentario} credentials={credentials}/>
        <Route exact strict path="/entradaAmpliada/:id" component={EntradaAmpliada} credentials={credentials}/>
        <Route exact path="/usuariosAdmin" component={UsuariosAdmin} credentials={credentials}/>
        <Route exact path="/comentariosAdmin" component={ComentariosAdmin} credentials={credentials}/>
        <Route exact path="/admin" component={UsuariosAdmin} credentials={credentials}/>
        <Route exact path="/blog" component={Blog} credentials={credentials}/>
        <Route exact path="/contacto" component={Contacto} credentials={credentials}/>
        <Route exact path="/login" credentials={credentials} component={() => <Login setCredentials={setCredentials} credentials={credentials} />}/>
        <Route exact path="/logout" component={() => <Logout setCredentials={setCredentials} credentials={credentials} />} credentials={credentials}/>
        <Route exact path="/registro" component={Registro} credentials={credentials} setCredentials={setCredentials}/>
        <Route exact path="/" component={Home} credentials={credentials}/>
        <Route exact path="/entradasAdmin" component={EntradasAdmin} credentials={credentials}/>
      </Switch>
    </Router>
  );
}

export default App;
