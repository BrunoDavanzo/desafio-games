// import React from 'react';
// import Item from './Item';

// export default function Main(props) {
//     const { products } = props;
//     return(
//         <main className="block col-2">
//             <h2>Products</h2>
//             <div className="row">
//                 {products.map((product, index) => (
//                 <Item key={product.id} product={product}></Item>
//                 ))}
//             </div>
//         </main>
//     )
// }
import React from 'react';
import Product from '../products.json';
import { Card, Button } from 'react-bootstrap';

const MainContent = (props) => {
    const { product, onAdd } = props;
    const listItems = Product.map((item)=>
    <div className="card" key={item.id}>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: R${item.price}</Card.Text>
                    <Card.Text>Score: {item.score}</Card.Text>
                    <Button  onClick={() => onAdd(product)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
    </div> 
    )
    return(
        <div className="catalog">
            {listItems}
        </div>
    )
}
export default MainContent;