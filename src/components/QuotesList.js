import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import Pagination from './Pagination';


const QuotesList = ({
  currentPage, quotesPerPage, quotes,
  onQuoteSelect, paginate, previousPage, nextPage,
}) => {
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const quoteItems = currentQuotes.map(quote => (
    <Quote
      onQuoteSelect={onQuoteSelect}
      key={quote.quote}
      quote={quote}
    />
  ));


  return (
    <div>
      <ul className="list-group text-left">
        {quoteItems}
      </ul>
      <Pagination
        quotesPerPage={quotesPerPage}
        totalQuotes={quotes.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

QuotesList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  quotesPerPage: PropTypes.number.isRequired,
  quotes: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  onQuoteSelect: PropTypes.func.isRequired,
};

export default QuotesList;
