import React from 'react';
import '../components/Item.css'
import Product from '../products.json';
import { Card, Button } from 'react-bootstrap';

export default function MainContent (props) {
    <div><h1>Product</h1></div>
    const { onAdd } = props;
    const listItems = Product.map((item)=>
    <div className="card" key={item.id}>
        <Card style={{ width: '16rem' }}>
                <Card.Img className="images" variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: R${item.price}</Card.Text>
                    <Card.Text>Score: {item.score}</Card.Text>
                    <Button  onClick={() => onAdd(item)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
    </div> 
    )
    return(
        <>
            {listItems}
        </>
    )
}
// export default MainContent;