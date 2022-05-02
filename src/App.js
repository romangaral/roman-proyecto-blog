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
import ComentariosAdmin from "./components/ComentariosAdmin";
import EntradaAmpliada from "./components/EntradaAmpliada";
import Login from "./components/Login";
import Registro from "./components/Registro"

function App() {

  const [credentials, setCredentials] = useState({
    header: '',
    rol: 'ANONYMOUS', 
    isLogged: false,
  });


  return (
    <Router>
      <Menu />
      <Switch>
        {/* <Route exact strict path="/entradaAmpliada/:id" component={EntradaAmpliada} /> */}
        <Route path="/crearEntrada" component={CrearEntrada} credentials={credentials}/>
        <Route exact strict path="/entradaAmpliada/:id" component={EntradaAmpliada} credentials={credentials}>
        <EntradaAmpliada />
        </Route>
        <Route path="/entradasAdmin" component={EntradasAdmin} credentials={credentials}/>
        <Route path="/usuariosAdmin" component={UsuariosAdmin} credentials={credentials}/>
        <Route path="/comentariosAdmin" component={ComentariosAdmin} credentials={credentials}/>
        <Route path="/admin" component={UsuariosAdmin} credentials={credentials}/>
        <Route path="/blog" component={Blog} credentials={credentials}/>
        <Route path="/contacto" component={Contacto} credentials={credentials}/>
        <Route path="/login" component={Login} credentials={credentials} setCredentials={setCredentials}/>
        <Route path="/registro" component={Registro} credentials={credentials}/>
        <Route path="/" component={Home} credentials={credentials}/>
      </Switch>
    </Router>
  );
}

export default App;
