import React, { Component } from 'react'
import $ from 'jquery'
export default class Cart extends Component {
	render() {
		const { cart , onDelete } = this.props
		return (
			<div className="cart" >
				<div className="cart_info">
					<table>
						<tbody>
							<tr>
								<td>No. of items</td>
								<td>:</td>
								<td><strong>{cart.length  }</strong></td>
							</tr>
							<tr>
								<td>Sub Total</td>
								<td>:</td>
								<td><strong>{this.showTotalAmount(cart)}</strong></td>
							</tr>
						</tbody>
					</table>
					<a className="cart_icon" href="#">
						<img className=" " src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart" />
					</a>
					<div className="cart_view">
						<ul>
							{ cart.length === 0 
							?
								<li>
									Không có sản phẩm nào
								</li>
							:
								cart.map((element, index) => {
									return(
										<li key={index}>
											<img className="product-image" src={element.product.image}/>
											<div className="info">
												<p className="name_product">{element.product.name}</p>
												<p className="price_product">{element.product.price}$</p>
											</div>
											<div className="product-total">
												<p className="quantity">{element.quantity} No. </p>
												<p className="amount">{element.product.price * element.quantity}$</p>
											</div>
											<a className="product-remove" href="#" onClick={ (e) => onDelete( e , element.product)  }>×</a>
										</li>
									)
								})
							}
							
						</ul>
						<div className="action-block">
							<button type="button" className=" ">TOTAL : {this.showTotalAmount(cart)} $</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	showTotalAmount(cart){
		var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
	}
	componentDidMount(){
		$('.cart_icon').click(() => {
			$('.cart_view').slideToggle(500);
			return false;
		})
	}
}