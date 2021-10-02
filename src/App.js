import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './components/Basket';
import Main from './components/Main';
import { useState } from 'react';
import Product from './products.json';


function App() {
	const { products } = Product;
	const [cartItems, setCartItems] = useState([]);
	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
			)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	}
	return (
		<div className="page">
			<div className="catalog">
				<Main products={products}></Main>
			</div>
			<div className="cart">
				<Basket onAdd={onAdd} cartItems={cartItems}></Basket>
			</div>
		</div>
	);
}

export default App;

