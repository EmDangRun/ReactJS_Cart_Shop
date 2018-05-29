import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
	var {product,quantity} = action
    switch (action.type) {
        case Types.ADD_TO_CART:
            var index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            var index = findProductInCart(state, product);
            console.log(index);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        default: return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.name === product.name) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;