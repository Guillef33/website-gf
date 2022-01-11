import React, { useState } from "react";
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import Input from "./components/input/Input";

import "./Login.css";

function Login() {
  const [user, setUser] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, sethasError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      console.log("Nombre de usuario agregado");
    } else {
      console.log("No es un texto de user");
      if (value.length < 6) {
        setPasswordError(true);
        console.log("Se activa el error");
      } else {
        setPasswordError(false);
        setPassword(value);
        console.log("Buena contrasena siga sigas");
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "Guillermo" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        sethasError(true);
      }
    } else {
      setIsLogin(false);
      sethasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log("account", account);
      ifMatch(account);
    }
  }

  return (
    <div className="login-wrapper-page">
      <div className="login-container">
        {isLogin ? (
          <div>
            <h1>Bienvenido, {user}</h1>
            <p>Esta es la entrada de tu aplicacion</p>
          </div>
        ) : (
          <div className="login-content">
            <Title
              title="Hello. Sign in to your account"
              text="The demo data:  Guillermo, 123456"
            />

            <div className="input-wrapper">
              <Label text="Usuario" />
              <Input
                atributo={{
                  id: "usuario",
                  name: "usuario",
                  type: "text",
                  placeholder: "ingrese tu usuario",
                }}
                handleChange={handleChange}
              />
              {hasError && (
                <p className="label-error">
                  Su usuario no existe, revise los datos ingresados.
                </p>
              )}
              <Label text="Contrasena" />
              <Input
                atributo={{
                  id: "contrasena",
                  name: "contrasena",
                  type: "password",
                  placeholder: "ingrese tu contrasena",
                }}
                handleChange={handleChange}
                param={passwordError}
              />
              {passwordError && (
                <p className="label-error">Contrasena invalida o incompleta</p>
              )}
              <div className="submit-button-container">
                <button onClick={handleSubmit}>Ingresar</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="login-welcome">
        <h2>Bienvenido a nuestra casa</h2>
      </div>
    </div>
  );
}

export default Login;
