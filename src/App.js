import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Components
import {ProductContext} from './Contexts/ProductContext.js';
import{CartContext} from './Contexts/CartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const deleteItems = id =>{
		const newCart = cart.filter(item => item.id !== id)
		setCart(newCart)


		console.log('Item Removed')
	}

	return(
		<ProductContext.Provider value = {{products,addItem,deleteItems}}>
		<CartContext.Provider value = {cart}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component ={Products}
					/>

					<Route
						path="/cart"
						component ={ShoppingCart }
					/>
				</div>
			</CartContext.Provider>		
	</ProductContext.Provider>
	);
}

export default App;
