import React from 'react'


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

export default Book;