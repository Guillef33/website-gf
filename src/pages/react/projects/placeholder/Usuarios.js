import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import User from "./User";
// import Tareas from "./Tareas";

const Tareas = () => <div>Tareas</div>

const Usuarios = () => (
  <Router>
    <Menu />
    <Switch>
      <Route exact-path="/" component={User} />
      <Route exact-path="/tareas" component={Tareas} />
    </Switch>
  </Router>
);

export default Usuarios;