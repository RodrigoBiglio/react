import Item from "../Item/Item"
import "./ItemList.css"


const itemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {productos.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

export default itemList