import React from 'react'
import Tabla from '../components/Tabla';
import Books from '../components/Book'

function Ejercicio() {


  return (
    <div className="App">
      <Tabla books={Books} h/>
    </div>
  );
}

export default Ejercicio;