import React, { Component } from 'react'
import './cardpage.scss'
import Cart from '../../components/Cart'
import ProductListContainer from '../../containers/ProductListContainer'
import Search from '../../components/Search'
import CartContainer from '../../containers/CartContainer'
import $ from 'jquery'
import {connect} from 'react-redux'
import callApi from '../../utils/app_caller'
import { actFeachProducts } from '../../actions/index'
class CardPage extends Component {
	state = {
		value:null,
		product:{

		}
	}
	render() {
		return (
			<div className="cardshop">
				<header>
					<div className="container">
						<div className="logo">
							<img src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" alt="Veggy Brand Logo" />
						</div>
						<Search search = { this._handleSearch}/>
						<CartContainer/>
					</div>
				</header>
				<main>
					<div className="container products">
						<div className="row">
							<ProductListContainer query={ this.state.value } product = { this._handleZoom }/>
						</div>
					</div>
				</main>
				<div className="modal-wrapper">
					<div className="modal-product">
					    <button type="button" className="close">×</button>
					    <div className="quick-view">
					        <div className="quick-view-image">
					      		<img src={this.state.product.image} alt={this.state.product.name} />
					      	</div>
						    <div className="quick-view-details">
						      	<span className="product-name">{this.state.product.name}</span>
						      	<span className="product-price">{this.state.product.price}$</span>
						    </div>
						</div>
				    </div>
				</div>
			</div>
		)
	}
	_handleZoom = (product) =>{
		this.setState({
			product:product
		})

	}
	_handleSearch = (event) => {
		var value = event.target.value;
		this.setState({
			value:value
		}) 
	}
	_handleModal(){
		$('.modal-wrapper .close').click(()=>{
			$('.modal-wrapper').css({
				visibility: 'hidden',
            	opacity: 0
			})
		});
		var modal = document.querySelector('.modal-wrapper');
		window.onclick = function(event) {
		    if (event.target == modal) {
		    	console.log(2);
		        modal.style.visibility = 'hidden';
		        modal.style.opacity = 0;
		    }
		}
	}
	componentDidMount(){
		callApi('GET',null)
		.then(
			res=>{
				this.props.actFeachProducts(res.data.data);
			}
		)
		.catch(
			err => {
				alert(err)
			}
		)
		$('main').click(()=>{
			$('.cart_view').slideUp();
		})
		this._handleModal();
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		actFeachProducts: (product) => {
				dispatch(actFeachProducts(product))
		}
	}
}
export default connect(null,mapDispatchToProps)(CardPage);