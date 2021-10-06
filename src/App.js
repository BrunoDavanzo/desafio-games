import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './components/Basket';
import MainContent from './components/Main';
import Product from './products.json';
import Header from './components/Header'

function App() {
	const product = [];
	const [cartItems, setCartItems] = useState([]);
	const [state, setState] = useState([]);

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(cartItems.map((x) => 
				x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x )
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};

	const onRemove = ( product ) =>{
		const exist = cartItems.find((x) => x.id === product.id);
		if(exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		}else {
			setCartItems(
				cartItems.map((x) =>
				x.id === product.id ? {...exist, qty: exist.qty -1 } : x
				)
			)
		}
	};
	
	const handleChangeSort = (e) => {
		let setState = {sort: e.target.value};
		listProducts();
	}
	
	 const listProducts = () => {
		setState(state =>{
			if (state.sort !== ''){
				state.Product.sort((a, b) =>(state.sort === "price") ? (a.price < b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
			} else if(state.sort === "score"){
				state.Product.sort((a, b) =>(state.sort === "score") ? (a.score < b.score ? 1 : -1) : (a.score < b.score ? 1 : -1))
			} else {
				state.Product.sort((a, b) =>(state.sort === "name") ? (a.name < b.name ? 1 : -1) : (a.name < b.name ? 1 : -1))
			}
			return (state.Product)
		})
	 }
	return (
		
			<div className="header">
				<Header>
					sort={state.sort}
					handleChangeSort = {handleChangeSort}
				</Header>
		<div className="page">
			<div className="catalog">
				<MainContent onAdd={onAdd} product={product} ></MainContent>
			</div>
			<div className="cart">
				<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
			</div>
		</div>
			</div>
	);
}

export default App;
 
