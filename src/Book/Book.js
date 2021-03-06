import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        let saleInfo = this.props.contents.saleInfo;
        let price = saleInfo && saleInfo.listPrice ? `$${saleInfo.listPrice.amount}` : 'Not listed.';
        // console.log(this.props.contents);
        return (
            <div className="book">
                <h2>{this.props.contents.volumeInfo.title}</h2>
                <div className="book-full">
                    <div className="book-image">
                        <img src={this.props.contents.volumeInfo.imageLinks.thumbnail} alt={this.props.contents.volumeInfo.title} />
                    </div>
                    <div className="book-contents">
                        <p>Author: {this.props.contents.volumeInfo.authors}</p>
                        <p>Price: {price}</p>
                        <p>{this.props.contents.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Book;