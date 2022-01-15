import React , { Component } from 'react';
import Axios from './axios'

class Users extends Component() {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    this.setState({
      usuarios: [
        {
          nombre: "Rodolfo",
          correo: "rodolfo@gmail.com",
          enlace: "rodolfo.com",
        },
        {
          nombre: "Platzi",
          correo: "platzi@platzi.com",
          enlace: "platzi.com",
        },
      ],
    });
  }

  ponerFilas = () => [
    this.state.usuarios.map((usuario) => (
      <tr>
        <td> {usuario.name}</td>
        <td> {usuario.correo}</td>
        <td> {usuario.enlace}</td>
      </tr>
    )),
  ];

  render() {
    return (
      <>
        <div className="margen">
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Enlace</th>
              </tr>
            </thead>
            <tbody>{ this.ponerFilas()}</tbody>
          </table>
        </div>
        <p>Un texto para mis usuarios </p>
      </>
    );
  }
}

export default Users;