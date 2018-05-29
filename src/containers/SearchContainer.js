import React, { Component  } from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import { actFeachProducts } from '../actions/index'

export class SearchContainer extends Component {
	render() {
		return (
			<Search search={_handleSearch}/>
		);
	}
	_handleSearch = (event) => {
		const { products , actFeachProducts }  = this.props;
		var value = event.target.value;
		var result = [];
		if(products.length > 0){
			result = products.filter( element => {
				return element.name.toLowerCase().search(value.toLowerCase()) !== -1
			})
			actFeachProducts(result);
		}		
	}
}

export default SearchContainer
