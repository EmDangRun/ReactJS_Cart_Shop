import React,{Component , Fragment} from 'react';
import { connect } from 'react-redux';
import  Product from './../components/Product';
import { actDecrement , actIncrement ,actCart } from '../actions/index';
import $ from 'jquery'
class ProductListContainer extends Component{
    render(){
        const { products , query } = this.props;
        return(
            <Fragment>
                {this._handleProduct(products , query)}
            </Fragment>   
        )
    }
    _handleProduct(products , query){
        var tmp = [];
        var result = null;
        if( query != null) {
            tmp = products.filter( element => {
                return element.name.toLowerCase().search(query.toLowerCase()) !== -1
            })
        }else{
            tmp = products;
        }
        if(tmp.length > 0) {
            result = tmp.map((element , index)=>{
                return(
                    <Product
                        key = { index }
                        product = { element }
                        cart = { this._handleCart }
                        zoom = { this._hanleZoom }
                    />
                )
            })
        } 
        else if (tmp.length == 0){
            return(
               <div className="products-results">
                    <div className="no-results">
                        <img src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png" alt="Empty Tree"/>
                        <h2>Sorry, no products matched your search!</h2>
                        <p>Enter a different keyword and try.</p>
                    </div>
                </div>
            )
        }  
        return result;
    }
    _handleCart = ( product , quantity) => {
        this.props.actCart(product , quantity);
        $('.cart_icon img').addClass('tada');
        setTimeout(()=>{
            $('.cart_icon img').removeClass('tada');
        },300)
        setTimeout(()=>{
            
        },3000)
    }
    _hanleZoom = (product) => {
        localStorage.setItem('product',JSON.stringify(product));
        this.props.product(product);
    }
}

const mapStateToProps  = state => {
    return{
        products:state.product.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actDecrement:(number) => {
            dispatch(actDecrement(number))
        },
        actIncrement:(number) =>{
            dispatch(actIncrement(number))
        },
        actCart:(product , quantity) => {
            dispatch(actCart(product , quantity))
        }
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(ProductListContainer);