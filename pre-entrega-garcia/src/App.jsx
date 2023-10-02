import React from 'react';
import NavBar from './componentes/NabVar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting ="Bienvenido a Celular Shop!"/>
    </>
  )
}

export default App