import { useState } from "react"
import Contador from "../Contador/Contador";
import {Link} from "react-router-dom";
import "./ItemDetail.css"
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({id,marca,modelo,stock, precio,img}) => {

  const [agregarCantidad, setAgregarCantidad] =useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    
    const item = {id, modelo, precio};
    agregarAlCarrito(item, cantidad);

  }
  return (
    <div className="contenedorItem">
        <img src={img} alt={modelo} />
        <h2>Marca: {marca}</h2>
        <h3>Modelo: {modelo}</h3>
        <strong>Precio: US$ {precio}</strong>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail