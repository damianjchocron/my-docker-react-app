import { useState, useEffect } from "react";
import { Card } from '../components/Card';
import { URL_API_BASE } from '../CONST';

export const Index = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(URL_API_BASE + 'products?page=1')
            .then(response => response.json())
            .then(data => setProducts(data['hydra:member']));
    }, []);

    return (
        <div className="container my-5">
            <h1>{`Listado de productos ${process.env.REACT_APP_NAME}`}</h1>
            <Card products={products} setProducts={setProducts} />
        </div>
    )
}
