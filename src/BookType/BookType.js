import React from 'react';

class BookType extends React.Component {
    render() {
        return (
                <form className="booktype_form">
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