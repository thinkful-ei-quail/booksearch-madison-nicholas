import React from 'react';

class PrintType extends React.Component {
    render() {
        return (
            <form className="printtype_form">
                    <label htmlFor="printtype">Print Type:</label>
                    <select name="printtype" id="printtype">
                        <option value="all">all</option>
                        <option value="books">books</option>
                        <option value="magazines">magazines</option>
                    </select>
            </form>
        );
    }
}


export default PrintType;