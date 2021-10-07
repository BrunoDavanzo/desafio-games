import React from 'react';
import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Basket from './components/Basket/Basket';
import MainContent from './components/Main/Main';
import Header from './components/Header/Header'

function App() {
	const product = [];
	const [cartItems, setCartItems] = useState([]);

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(cartItems.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};

	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			)
		}
	};

	return (
		<div className="header">
			<Header/>
			<div className="page">
				<div className="catalog">
					<MainContent onAdd={onAdd} product={product}></MainContent>
				</div>
				<div className="cart">
					<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
				</div>
			</div>
		</div>
	);
}

export default App;
 
