import React from 'react';
import './Item.css';
import callOfDuty from '../img/callOfDuty.png';
import { Card, Button } from 'react-bootstrap';


export default function Item(props){
    const { product, onAdd } = props;
    return (
        <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={callOfDuty} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: R${product.price}</Card.Text>
                    <Card.Text>Score: {product.score}</Card.Text>
                    <Button  onClick={() => onAdd(product)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}