import { combineReducers } from 'redux';
import product from './product';
import cart from './cart';

const appReducers = combineReducers({
	product,
	cart
})
export default appReducers;