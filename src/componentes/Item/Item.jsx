import React from 'react'
import "./Item.css";
import {Link} from 'react-router-dom';

const Item = ({id,marca, modelo, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={modelo} />
      <h3> Marca: {marca}</h3>
      <h4> Model: {modelo}</h4>
      <span>Precio:  US${precio} </span>
      <Link to={`/item/${id}`}> ver detalles </Link>

    </div>
  )
}

export default Item