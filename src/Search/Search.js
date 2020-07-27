import React from 'react';

class Search extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let searchTerm = (e.currentTarget.elements.search.value);
        this.props.onSearch(searchTerm);
    }

    render() {
        return (
            <div className="searchBar">
                <form className="search_form" onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}


export default Search;