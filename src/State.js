import React, { Component } from 'react';
import Dropdown from './Dropdown.js'

class State extends Component {
     constructor(props) {
        super(props);
        this.state = {
            listStates: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/countries/' + '/states/').then(
            (response) => {
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
            <Dropdown stateList={this.state.listStates}/>
        )
    }
}

export default State;