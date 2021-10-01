import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Product from './products.json';
import callOfDuty from './img/callOfDuty.png';

function App() {
  return (
    <div className="page">
      <div className="catalog">
        {
          Product.map((item, index) => {
            return (
              <div className="card" key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={callOfDuty} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: R${item.price}</Card.Text>
                    <Card.Text>Score: {item.score}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </div>
      <div className="cart">

      </div>
    </div>
  );
}

export default App;

