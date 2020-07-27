import React from 'react';
import './BookType.css';

class BookType extends React.Component {

    handleChange = (e) => {
        e.preventDefault();
        const bookTypeFilter = (e.currentTarget.elements.booktype.value);
        this.props.onBookTypeFilter(bookTypeFilter);
    }

    render() {
        return (
            <form className="booktype_form" onChange={this.handleChange}>
                <label htmlFor="booktype">Book Type:</label>
                <select name="booktype" id="booktype">
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="full">full</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="partial">partial</option>
                </select>
            </form>
        );
    }
}


export default BookType;