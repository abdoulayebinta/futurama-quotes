import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

/**
 * Search Bar Component - Renders a search bar
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { quote: '' };
  }


  /**
   * Handler for input change
   * @param {string} quote - The quote typed in the searchbar
   */
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
          type="search"
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search for quotes..."
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchQuoteChange: PropTypes.func.isRequired,
};

export default SearchBar;
