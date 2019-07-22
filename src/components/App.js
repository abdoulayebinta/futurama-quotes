import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../styles/App.css';
import SearchBar from './SearchBar';
import QuotesList from './QuotesList';
import QuoteDetail from './QuoteDetail';


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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
            selectedQuote: null,
            error: false,
            selectedCharacter: null,
            currentPage: 1,
            quotesPerPage: 5
        };

        this.handleCharacterChange = this.handleCharacterChange.bind(this);
        this.paginate = this.paginate.bind(this);

        //this.quoteSearch('Fry');
        //console.log(`The current state:`, this.state);
        this.getAllQuotes();
    }

    /* When the component is mount, we make our HTTP request */
    componentDidMount() {
        // Make my API call here...

    }


    getAllQuotes() {
        axios.get(`${API_URL}/${ALL_QUOTES}`)
            .then((response) => {
                this.setState({
                    quotes: response.data,
                    selectedQuote: response.data[0]
                }) 
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }

    quotesByCharacter(character) {
        axios.get(`${API_URL}/${QUOTE_BY_CHARACTER}/${character}`)
            .then((response) => {
                this.setState({
                    quotes: response.data,
                    selectedQuote: response.data[0]
                }) 
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }

    quoteSearch(term) {
        axios.get(`${API_URL}/${QUOTE_BY_CHARACTER}/${term}`)
            .then((response) => {
                this.setState({
                    quotes: response.data,
                    selectedQuote: response.data[0]
                }) 
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }

    paginate(pageNumber) {
        
        this.setState({currentPage: pageNumber});
    } 

    /* componentDidMount() {
        const url = `https://futuramaapi.herokuapp.com/api/quotes`;

       /*  fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error)); */ 
        
        // Connecting our data using axios
        /* axios.get(url)
            .then((respone) => {
                this.setState({
                    quotes: respone.data
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    } */

    /* renderItems() { 
        if(!this.state.erro) {
            return this.state.quotes.map((item) => (
                <Quote key={item.quote} item={item} />
            ));
        } else {
            return <Error />
        }
    } */

    // Define our callback for making a search 

    /* handleCharacterChange(event) {
        //this.setState({favoriteCharacter: event.target.value});
        console.log(event.target.value);
    }
 */ 
    handleCharacterChange(selectedCharacter) {
        this.setState({selectedCharacter});
        // Make a request on each change to the API
        let character = selectedCharacter.label;
        this.quotesByCharacter(character);
    };

    render() { 
        // Get current quotes
        const { currentPage, quotesPerPage, quotes } = this.state;
        //const indexOfLastQuote = currentPage * quotesPerPage;
        //const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
        //const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);


        const quoteSearch = _.debounce((term) => { this.quoteSearch(term)}, 300);
        const { selectedCharacter } = this.state;  
        return (
            <div>
                <SearchBar onSearchTermChange={quoteSearch} />
                <Select
                    value={selectedCharacter}
                    onChange={this.handleCharacterChange}
                    options={options}
                    placeholder="Select your favorite character..."
                />
                <QuoteDetail quote={this.state.selectedQuote} />
                <QuotesList 
                    onQuoteSelect={selectedQuote => this.setState({ selectedQuote })}
                    quotes={quotes} 
                    currentPage={currentPage}
                    quotesPerPage={quotesPerPage}
                    paginate={this.paginate}
                />
            </div>
        );
    }
}

export default App;