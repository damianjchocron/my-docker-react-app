import React from 'react'
import Tabla  from '../components/TableInstance';
import { books } from '../data/books'

export const TableInstance = () =>
(
  <div className="App">
    <Tabla books={books} />
  </div>
);

