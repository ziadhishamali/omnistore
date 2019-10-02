import React from 'react';
import search from '../icons/search.svg';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <img src={search} alt="search"/>
            <select name="choose brand" className="choose-brand-select clickable">
                <option>Choose brand</option>
                <option value="Gucci">Gucci</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
            </select>
            <input type="text" className="search-input-text"/>
            <input type="button" className="search-input-button clickable" value="Search"/>
        </div>
    )
}

export default SearchBar;