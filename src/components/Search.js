import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search } = this.props
        return (
            <div className="search">
                <div className="search_form">
                    <input type="search" placeholder="Search for Vegetables and Fruits" onChange={(event) => search(event) } className="search-keyword" />
                    <button className="search-button" type="submit"></button>
                </div>
            </div>
        );
    }
}

export default Search;