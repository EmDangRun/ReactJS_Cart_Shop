import * as Types from './../constants/ActionType';
var initialState = {
	result:[],
	quantity:0,
	increment:0
}
export default function product(state = initialState , action){
	switch(action.type) {
		case Types.FETCH_PRODUCTS:
			state.result = action.products
            return Object.assign({}, state);
        case Types.DECREMENT:
        	return Object.assign({}, state ,{
        		quantity : state.quantity - action.number
        	});
        case Types.INCREMENT:
	        return Object.assign({}, state ,{
	        	quantity : state.quantity + action.number
	        });
		default : 
			return state
	}
}
