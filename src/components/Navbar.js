'use strict'
import React from "react";
import '../assets/css/navbar.css';
import '../assets/fonts/style.css';

class Navbar extends React.Component{

render(){
    return(

<div className="nav">
   
    <div className="nav-head">
        <div className="logo">Logo</div>
        <div className="contenido">Contenido</div>
        <div className="redes">Redes</div>
    </div>
    <div className="menu-btn"><a href="#"><span className="icon icon-menu1"></span></a></div>
<div className="main-nav">

    <div><a href="#">INICIO</a></div>
    <div><a href="#">PROYECTOS</a></div>
    <div><a href="#">PERSONAL CV</a></div>
    <div><a href="#">CONTACTO</a></div>
</div>
</div>
    );
}
}

export default Navbar;