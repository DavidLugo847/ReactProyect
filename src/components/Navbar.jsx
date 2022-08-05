'use strict'
import React from "react";
import '../assets/css/navbar.css';
import '../assets/fonts/style.css';
import logoSena from '../assets/img/logoSena.png';
import logoSirep from '../assets/img/logoSirep.png';
import logoSE from '../assets/img/centro_user.png';


class Navbar extends React.Component{

render(){
    return(

<div className="nav">
   
    <div className="head-nav">
        <div className="logo1"><img src={logoSena} alt="logoSena" /></div>
        <div className="logo2"><img src={logoSE} alt="logoSenaEmpresa" /></div>
        <div className="logo3"><img src={logoSirep} alt="logoSirep" /></div>
    </div>
    <div className="nav-bar"><a href="#">Iniciar Sesión</a></div>
</div>
    );
}
}

export default Navbar;