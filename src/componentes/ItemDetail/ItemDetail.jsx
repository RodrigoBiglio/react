import "./ItemDetail.css"

const ItemDetail = ({id,marca,modelo,precio,img}) => {
  return (
    <div className="contenedorItem">
        <img src={img} alt={modelo} />
        <h2>Marca: {marca}</h2>
        <h3>Modelo {modelo}</h3>
        <strong>Precio {precio}</strong>
    </div>
  )
}

export default ItemDetail