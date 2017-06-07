import React, { Component } from 'react';

class Dropdown extends Component {
    changeList(name, code) {

    }

    render() {
        return (
            <div>
                <select id='countries'>
                    <option value=''>Pick One of the Following Countries</option>
                </select>
                <select id='state'>
                    <option value=''>Pick One of the Following States After Picking a Country</option>
                </select>
            </div>
        );
    }
}

Dropdown.propTypes = {

};

export default Dropdown;