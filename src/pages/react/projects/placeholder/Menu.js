import React from 'react'
import { Link } from 'react-router-dom'

import './user.css'

const Menu = (props) => (
  <div className="container">
    <nav className="menu">
      {/* Para usar nav tengo que cambiar los estilos */}
      <Link to="/">Usuarios</Link>
      <Link to="/tareas">Tareas</Link>
    </nav>
  </div>
);

export default Menu;