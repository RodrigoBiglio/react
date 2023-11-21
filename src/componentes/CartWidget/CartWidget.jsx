import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CarWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>

      <Link to="./cart    ">
        <p>🛒</p>
      </Link>
      {
        cantidadTotal > 0 && <strong> {cantidadTotal}</strong>
      }
    </div>
  )
}

export default CarWidget