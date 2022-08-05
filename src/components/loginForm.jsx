'use strict'
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import logoSirep from '../assets/img/logoSirep.png';
import '../assets/css/loginForm.css';

class LoginForm extends React.Component{
    render(){
return(

<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
            <img className="logoLogin" src={logoSirep} alt="" srcset="" />
          <h3 className="Auth-form-title">Bienvenido(a)</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingresa tu Usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </div>
          <p className="forgot-password text-right mt-2">

          </p>
        </div>
      </form>
    </div>


);

    }
}


export default LoginForm;