import React, { Component } from 'react'
import $ from 'jquery'
export default class Product extends Component {
    state = {
        quantity:1,
        name:'ADD TO CART',
        style:{
            background: '#077915',
        }
    }
    render() {
        const { product, decrement ,increment , cart , zoom } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product">
                        <div className="product-image">
                            <img src={product.image} onClick={() => this._handleZoom(product) } alt="Brocolli - 1 Kg" />
                        </div>
                        <h4 className="product-name">{product.name}</h4>
                        <p className="product-price">{product.price}$</p>
                        <div className="stepper-input">
                            <a href="#" className="decrement" onClick = { this._handleDecrement }>–</a>
                            <input type="number" className="quantity" defaultValue="1" ref='number'/>
                            <a href="#" className="increment" onClick = { this._handleIncrement }>+</a>
                        </div>

                        <div className="product-action">
                            <button type="button" style={this.state.style} onClick = {() => this._handleCart(product)}>{this.state.name}</button>
                        </div>
                </div>
            </div>
        );
    }
    _handleZoom(product){
        $('.modal-wrapper').css({
            visibility: 'visible',
            opacity: 1
        })
        this.props.zoom(product);
    }
    _handleCart(product){
        this.setState({
            name:'ADDED',
            style:{
                background: '#fc7710'
            }
        })
        this.props.cart( product, this.state.quantity);
        setTimeout(()=>{
            this.setState({
                name:'ADD TO CART',
                style:{
                    background: '#077915'
                }
            })
        },3000)
    }
    _handleDecrement = (e) => {
        e.preventDefault();
        if(this.state.quantity === 1) {
            this.setState({
                quantity: 1
            })
        }

        else{
            this.setState({
                quantity: this.state.quantity -= 1
            })
        }
        this.refs.number.value = this.state.quantity
    }
    _handleIncrement = (e) => {
        e.preventDefault();
        this.setState({
            quantity: this.state.quantity += 1
        })
        this.refs.number.value = this.state.quantity
    }
}