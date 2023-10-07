import React from 'react';
import "./NavBar.css";
import CarWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
   <header>
        <h1>Celular-Shop</h1>

        <nav>
            <ul>
                <li>Celulares</li>
                <li>Accesorios</li>
                <li>Planes</li>
            </ul>
        </nav>

        <CarWidget/>
   </header>
  )
}

export default NavBar