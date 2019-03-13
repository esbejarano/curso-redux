import React, { Component } from 'react';
import Search from './../components/search';

class SearchContainer extends Component {
    state = {
        value: 'Luis Fonsi'
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    setInputRef = element => {
        this.input = element;
    }

    render() {
        return (
            <Search setRef={this.setInputRef} handleSubmit={this.handleSubmit} 
            handleInputChange = {this.handleInputChange}
            value={this.state.value}/>
        );
    }
}

export default SearchContainer;