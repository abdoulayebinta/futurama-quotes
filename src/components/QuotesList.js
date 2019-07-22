import React, { Component } from 'react';
import Quote from './Quote';
import Pagination from './Pagination';


const QuotesList = (props) => {
  // Get current quotes
  const {
    currentPage, quotesPerPage, quotes, paginate,
  } = props;
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const quoteItems = currentQuotes.map(quote => (
    <Quote
      onQuoteSelect={props.onQuoteSelect}
      key={quote.quote}
      quote={quote}
    />
  ));


  return (
    <div>
      <div>
        <ul className="col-md-4 float-md-right list-group">
          {quoteItems}
        </ul>
      </div>
      <div>
        <Pagination
          quotesPerPage={quotesPerPage}
          totalQuotes={props.quotes.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default QuotesList;
