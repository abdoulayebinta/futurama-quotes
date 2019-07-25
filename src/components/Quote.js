import React from 'react';
import PropTypes from 'prop-types';

/**
 * Quote Component - renders a single quote as a list element
 */
const Quote = ({ quote, onQuoteSelect }) => {
  const imageUrl = quote.image;

  return (
    <li onClick={() => onQuoteSelect(quote)} className="list-group-item">
      <div className="media">
        <img className="mr-3 mini-quote-img" src={imageUrl} alt={quote.character} />
        <div className="media-body">
          <h5 className="mt-0">{quote.character}</h5>
          <p>
            {quote.quote.substring(0, 20)}
...
          </p>
        </div>
      </div>
    </li>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  onQuoteSelect: PropTypes.func.isRequired,
};

export default Quote;
