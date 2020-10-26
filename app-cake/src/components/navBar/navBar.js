import React from 'react';
import style from './navBar.module.css';
//sticky-top
export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light" id={style.nav}>
            <img src="imagenes/logo.jpg" width="120" height="90" class="d-inline-block align-top" alt="" loading="lazy"/>
            <span class="navbar-brand mb-0 h1 mr-4 ml-4" id={style.title}>H y S Cake's</span>
            <div class="collapse navbar-collapse justify-content-end" id={`${style.content}`}>
                <ul class="navbar-nav">
                    <li class="nav-item mr-4">
                        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link" href="/productos">Productos</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link" href="#">Quienes somos</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}