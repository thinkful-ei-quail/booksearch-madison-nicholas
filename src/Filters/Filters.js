import React from 'react';
import PrintType from '../PrintType/PrintType.js';
import BookType from '../BookType/BookType.js';

class Filters extends React.Component {
    render() {
        return (
            <div className="filterBar">
                <PrintType />
                <BookType />
            </div>
        );
    }
}


export default Filters;