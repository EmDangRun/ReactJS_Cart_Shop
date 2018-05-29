import * as Types from './../constants/ActionType';

export const actDecrement = (number) => {
    return {
        type: Types.DECREMENT,
        number
    }
}

export const actIncrement = (number) => {
    return {
        type: Types.INCREMENT,
        number
    }
}


export const actFeachProducts = (products) =>{
	return{
		type:Types.FETCH_PRODUCTS,
		products
	}
}

export const actCart = ( product , quantity ) => {
    return{
        type:Types.ADD_TO_CART,
        product , quantity
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}