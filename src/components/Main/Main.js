import React from 'react';

import '../Main/Main.css'
import { Card, Button } from 'react-bootstrap';

import Product from '../../products.json';

export default function MainContent(props) {
    const { onAdd } = props;
    const listItems = Product.map((item) =>
        <div className="card" key={item.id}>
            <Card style={{ width: '16rem' }}>
                <Card.Img className="images" variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: R${item.price}</Card.Text>
                    <Card.Text>Score: {item.score}</Card.Text>
                    <Button onClick={() => onAdd(item)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
    return (
        <>
            {listItems}
        </>
    )
}