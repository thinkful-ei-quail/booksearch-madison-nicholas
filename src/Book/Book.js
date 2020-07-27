import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {

        let price = this.props.contents.saleInfo && this.props.contents.saleInfo.listPrice ? this.props.contents.saleInfo.listPrice.amount : '';
        // console.log(this.props.contents);
        return (
            <div className="book">
                <h2>{this.props.contents.volumeInfo.title}</h2>
                <div className="book-expanded">
                    <img src={this.props.contents.volumeInfo.imageLinks.thumbnail} alt={this.props.contents.volumeInfo.title} />
                    <div className="book-contents">
                        <p>Author(s): {this.props.contents.volumeInfo.authors}</p>
                        <p>Price: ${price}</p>
                        <p>{this.props.contents.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Book;