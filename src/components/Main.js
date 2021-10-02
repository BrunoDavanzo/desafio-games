import React from 'react';
import Item from './Item';

export default function Main(props) {
    const { products } = props;
    return(
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                <Item key={product.id} product={product}></Item>
                ))}
            </div>
        </main>
    )
}