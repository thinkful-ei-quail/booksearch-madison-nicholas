import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="searchBar">
                <form className="search_form">
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" placeholder="Enter your search here"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}


export default Search;