import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCountries: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/countries/').then(
            (response) => {
                response.json().then(
                    (json) => {
                        this.setState({listCountries: json});
                    }
                );
            }
        );
    }

    render() {
        return (
            <Dropdown countryList={this.state.listCountries}/>
        )
    }
}

export default Country;