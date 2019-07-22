import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from './Input';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
    render() {
        return (
            <div className="search-quote">
                <FaSearch />
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search...."
                />
            </div>   
        );
    }
}

export default SearchBar;