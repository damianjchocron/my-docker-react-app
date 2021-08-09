import PropTypes from 'prop-types';
import React from 'react'
import Book from './Book'

const Tabla = ({ books }) => (
    <div className="container">
        <h1 className="card-title mx-4 mt-4">Table</h1>
        <table className="table table-striped table-hover mx-auto w-75">
            <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Sales</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => {
                    return (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.sales}</td>
                            <td>{book.price}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
)

Tabla.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.instanceOf(Book),
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            sales: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })
    )
}



export default Tabla;