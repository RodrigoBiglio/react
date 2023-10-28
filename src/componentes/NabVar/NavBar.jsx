import React from 'react';
import "./NavBar.css";
import CarWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
   <header>
      <Link to='/'>
        <h1>Celular-Shop</h1>
      </Link>

      

      <nav>
          <ul>
              <li>
                <NavLink to='categoria/samsung'>Samsumg</NavLink>
              </ li>
              <li>
                <NavLink to='categoria/xiaomi'>XIaomi</NavLink>
              </li>
              <li>
                <NavLink to='categoria/apple'>Apple</NavLink>
              </li>
              <li>
                <NavLink to='categoria/huawei'>Huawei</NavLink>
              </li>
          </ul>
      </nav>

      <CarWidget/>
   </header>
  )
}

export default NavBar