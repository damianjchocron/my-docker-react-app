import PropTypes from 'prop-types';
import React from 'react'

const TableJson = ({ books }) => (
    <div className="container">
        <h1 className="card-title mx-4 mt-4">Table Json</h1>
        <table className="table table-striped table-hover mx-auto w-75">
            <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Sales</th>
                    <th>Price</th>
                    <th>Email</th>
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
                            <td>{book.email}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
)

const isEmail = (propValue = 'books', key = 'email', componentName = 'Tabla', location = false, propFullName = false) => {

    const prop = (location && propFullName) ? propFullName : key;

    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    if (!regex.test(propValue[key])) {
        return new Error(`Invalid prop ${prop} passed to ${componentName}. Expected a valid email address.`);
    }
}

TableJson.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            sales: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            email: isEmail
        })
    )
}

export default TableJson;
