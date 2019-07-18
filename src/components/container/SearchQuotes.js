import React, { Component } from 'react';
import Input from '../presentational/Input';

class SearchQuotes extends Component {
    constructor(props) {
        super(props);

        this.state = { search_term: '' };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({ search_term: event.target.value });
    }

    render() {
        const { search_term } = this.state;

        return (
            <Input 
                value={search_term}
                handleChange={this.handleChange}
            />
        )
    }
}

export default SearchQuotes;