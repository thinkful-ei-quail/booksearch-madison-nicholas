import React from 'react';
import Book from '../Book/Book.js';

class BookList extends React.Component {
    render() {
        return (
            <div className="booklist">
                <Book />
                <Book />
            </div>
        );
    }
}


export default BookList;