import React from 'react'
import Tabla from '../components/TableJson';
import { books } from '../data/books-json'

export const TableJson = () =>
(
  <div className="App">
    <Tabla books={books} />
  </div>
);


