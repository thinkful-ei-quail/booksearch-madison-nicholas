import React from 'react';
import './PrintType.css';

class PrintType extends React.Component {

    handleChange = (e) => {
        e.preventDefault();
        const printTypeFilter = (e.currentTarget.elements.printtype.value);
        this.props.onPrintTypeFilter(printTypeFilter);
    }

    render() {
        return (
            <form className="printtype_form" onChange={this.handleChange}>
                    <label htmlFor="printtype">Print Type: </label>
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