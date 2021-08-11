import React from 'react'
// import PropTypes from 'prop-types';

class Book extends React.Component {
    constructor(title, author, sales, price, email) {
        super();

        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
        this.email = email;
    }
}

// Book.propTypes = {
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     sales: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
// }

export default Book;