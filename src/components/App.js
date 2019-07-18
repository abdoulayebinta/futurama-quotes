import React, { Component } from 'react';
import SearchBar from './container/SearchQuotes';
import '../styles/App.css';
import SearchQuotes from './container/SearchQuotes';


class App extends Component {
    constructor(props) {
        super(props);

    }

    render() { 
        return (
            <div className="App">
                <h1>Futurama Quotes</h1>
                <p>Welcome to Futurama Search....!</p>
                <SearchQuotes />
            </div>
        );
    }
}

export default App;