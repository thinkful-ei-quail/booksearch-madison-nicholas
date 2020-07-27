import React from 'react';

class BookType extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let bookTypeFilter = (e.currentTarget.elements.booktype.value);
        this.props.onBookTypeFilter(bookTypeFilter);
    }

    render() {
        return (
            <form className="booktype_form" onChange={e => this.handleSubmit(e)}>
                <label htmlFor="booktype">Book Type:</label>
                <select name="booktype" id="booktype">
                    <option value="null">no filter</option>
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