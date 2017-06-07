import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class Country extends Component {
    compondentDidMoud() {
        fetch('http://localhost:8000/api/countries/').then(function(response) {
            method: 'get'
        }).catch(function(err) {

        });
    }

    render() {
        return (
            
        );
    }
}

Country.propTypes = {
    name: React.propTypes.string,
    code: React.propTypes.string,
};

export default Country;