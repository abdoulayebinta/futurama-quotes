import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../../styles/App.css';
import SearchBar from '../SearchBar';
import QuotesList from '../QuotesList';
import QuoteDetail from '../QuoteDetail';


const API_URL = 'https://futuramaapi.herokuapp.com';
const ALL_QUOTES = 'api/quotes';
const QUOTE_BY_CHARACTER = 'api/characters';


const options = [
  { value: 'bender', label: 'Bender' },
  { value: 'fry', label: 'Fry' },
  { value: 'leela', label: 'Leela' },
  { value: 'professor farnsworth', label: 'Professor Farnsworth' },
  { value: 'amy', label: 'Amy' },
  { value: 'zapp brannigan', label: 'Zapp Brannigan' },
  { value: 'lurr', label: 'Lurr' },
  { value: 'dr zoidberg', label: 'Dr Zoidberg' },
  { value: 'linda the reporter', label: 'Linda the reporter' },
  { value: 'bob barker', label: 'Bob Barker' },
  { value: 'hermes', label: 'Hermes' },
  { value: 'morgan proctor', label: 'Morgan Proctor' },
  { value: 'mom', label: 'Mom' },
  { value: 'robot mob', label: 'Robot Mob' },
  { value: 'giant bender', label: 'Giant Bender' },
  { value: 'kif', label: 'Kif' },
  { value: 'don bot', label: 'Don bot' },
];

/**
 * HomePage Component - Houses components on the Home Page
 */
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuote: null,
      selectedCharacter: null,
      currentPage: 1,
      quotesPerPage: 5,
    };

    this.handleCharacterChange = this.handleCharacterChange.bind(this);
    this.paginate = this.paginate.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  /* When the component is mount, we make our HTTP request */
  componentDidMount() {
    this.getAllQuotes(25);
  }

  /**
   * Fetch all quotes from the API endpoint using axios
   * @param {number} count - The number of count to return from the call
   * @return a promise
   */
  getAllQuotes(count) {
    axios.get(`${API_URL}/${ALL_QUOTES}/${count}`)
      .then((response) => {
        this.setState({
          quotes: response.data,
          selectedQuote: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Fetch quotes by character
   * @param {string} character - Character
   * @return {Promise}
   */
  quotesByCharacter(character) {
    axios.get(`${API_URL}/${QUOTE_BY_CHARACTER}/${character}`)
      .then((response) => {
        this.setState({
          quotes: response.data,
          selectedQuote: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /** Searching for a quote
   * @param {string} quote - Quote to search for
   */
  quoteSearch(quote) {
    // Clear the drop down field
    this.setState({ selectedCharacter: null });
    axios.get(`${API_URL}/${ALL_QUOTES}/?search=${quote}`)
      .then((response) => {
        this.setState({
          quotes: response.data,
          selectedQuote: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Pagination */
  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  /* Pagination - Previous Page */
  previousPage() {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState(state => ({
        currentPage: state.currentPage - 1,
      }));
    }
  }

  /* Pagination - Next Page */
  nextPage() {
    const { currentPage, quotes, quotesPerPage } = this.state;
    const totalQuotes = Math.ceil(quotes.length / quotesPerPage);
    if (currentPage < totalQuotes) {
      this.setState(state => ({
        currentPage: state.currentPage + 1,
      }));
    }
  }

  /**
   * Make a request to the API on each character change
   * @param {string} selectedCharacter - The current character selected
   * @return {Promise}
   */
  handleCharacterChange(selectedCharacter) {
    this.setState({ selectedCharacter, currentPage: 1 });
    const character = selectedCharacter.label;

    this.quotesByCharacter(character);
  }

  render() {
    const {
      currentPage, quotesPerPage, quotes, selectedQuote,
    } = this.state;

    // Debounce quote searching using lodash to automatically search after 4 seconds of typing
    const quoteSearch = _.debounce((quote) => { this.quoteSearch(quote); }, 400);
    const { selectedCharacter } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-justify  row1">
          <div className="col-md-8 col-sm-6 row1-col1">
            <Select
              value={selectedCharacter}
              onChange={this.handleCharacterChange}
              options={options}
              placeholder="Select your favorite character..."
              className="select-dropdown"
            />
          </div>
          <div className="col-md-4  col-sm-6 row1-col2">
            <SearchBar onSearchQuoteChange={quoteSearch} />
          </div>
        </div>
        <div className="row justify-content-justify row2">
          <div className="col-md-8 col-sm-6 row2-col1">
            <QuoteDetail quote={selectedQuote} />
          </div>
          <div className="col-md-4 col-sm-6  align-self-start row2-col2">
            <QuotesList
              onQuoteSelect={quote => this.setState({ selectedQuote: quote })}
              quotes={quotes}
              currentPage={currentPage}
              quotesPerPage={quotesPerPage}
              paginate={this.paginate}
              previousPage={this.previousPage}
              nextPage={this.nextPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
