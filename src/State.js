import React, { Component } from 'react';
import Dropdown from './Dropdown.js'

class State extends Component {
     constructor(props) {
        super(props);
        this.state = {
            listStates: []
        };
    }
    
    componentWillReceiveProps(nextProps) {
        fetch('http://localhost:8000/api/countries/' + nextProps.currentCountry + '/states/').then(
            (response) => {
                console.log('made it to the first level');
                response.json().then(
                    (json) => {
                        this.setState({listStates: json});
                    }
                );
            }
        );
    }

    render() {
        return (
            <Dropdown arrayList={this.state.listStates}/>
        )
    }
}

export default State;