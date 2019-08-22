
import React,{useContext} from 'react';
import {CartContext} from '../Contexts/CartContext'
import {ProductContext} from '../Contexts/ProductContext'

const Item = props => {
	const{deleteItems} = useContext(ProductContext)
	console.log(props.id)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick = {()=>deleteItems(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};
export default Item;
