import React from 'react'
import Tabla from '../components/Tabla';
import { books } from '../data/books'

function Ejercicio() {


  return (
    <div className="App">
      <Tabla books={books} />
    </div>
  );
}

export default Ejercicio;