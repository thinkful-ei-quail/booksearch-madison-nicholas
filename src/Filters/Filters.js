import React from 'react';
import PrintType from '../PrintType/PrintType.js';
import BookType from '../BookType/BookType.js';

class Filters extends React.Component {
    render() {
        return (
            <div className="filterBar">
                <PrintType
                    onPrintTypeFilter={this.props.onPrintTypeFilter}/>
                <BookType
                    onBookTypeFilter={this.props.onBookTypeFilter}/>
            </div>
        );
    }
}


export default Filters;