import React from 'react';
import Book from '../Book/Book.js';

class BookList extends React.Component {
    render() {
       let bookContents = this.props.books.items.map(book => {
           return <Book contents={book}/>
       }) 
        console.log(this.props.books.items)
        return (
            <div className="booklist">
                {bookContents}
            </div>
        );
    }
}


export default BookList;