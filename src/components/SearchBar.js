import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { quote: '' };
  }

  onInputChange(quote) {
    const { onSearchQuoteChange } = this.props;
    this.setState({ quote });
    onSearchQuoteChange(quote);
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="search-quote">
        <FaSearch />
        <input
          value={quote}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search...."
        />
      </div>
    );
  }
}

export default SearchBar;
