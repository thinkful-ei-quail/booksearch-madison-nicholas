import React from 'react';
import Book from '../Book/Book.js';

class BookList extends React.Component {
    render() {
       let bookContents = this.props.books.map((book, idx) => {
           const bookHash = book + '-' + idx;
           return(
                <Book 
                    contents={book}
                    key={bookHash}/>
           );
       }) 
        console.log(this.props.books)
        return (
            <div className="booklist">
                {bookContents}
            </div>
        );
    }
}


export default BookList;