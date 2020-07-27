import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <h2>Henry I</h2>
                <div className="book-expanded">
                    <img src="" alt="" />
                    <div className="book-contents">
                        <p>Author: {this.props.contents.authors}</p>
                        <p>Price: $50.00</p>
                        <p>Description of this amazing book.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Book;