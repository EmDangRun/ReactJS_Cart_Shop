import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { actDeleteProductInCart } from '../actions';
class CartContainer extends Component {
	render() {
		const { cart } = this.props;
		return (
			<Cart cart = { cart } onDelete={ this._handleDeleteCart }/>
		);
	}
	_handleDeleteCart = (e,itemcart) => {
		e.preventDefault();
		this.props.actDeleteProductInCart(itemcart)
	}
}
const mapStateToProps = state => {
	return {
		cart : state.cart
	}
}
const mapDispatchToProps = dispath => {
	return {
		actDeleteProductInCart:(itemcart) => {
			dispath(actDeleteProductInCart(itemcart))
		}
	}
}
export default connect(mapStateToProps , mapDispatchToProps) (CartContainer)
