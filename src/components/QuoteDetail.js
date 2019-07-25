import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';


/**
 * Quote Detail Component - Render a card with picture of character and a quote
 */
const QuoteDetail = ({ quote }) => {
  if (!quote) {
    return (
      <div className="spinner text-center">
        <h2>
          Loading Data
          {' '}
          <FaSpinner />
        </h2>
      </div>
    );
  }

  const imageUrl = quote.image;

  return (
    <div className="quote-detail float-md-left">
      <div className="card text-center">
        <img src={imageUrl} className="quote-img card-img-top text-center" alt="Character" />
        <div className="card-body details">
          <h5 className="card-title">{quote.character}</h5>
          <p className="card-text">{quote.quote}</p>
        </div>
      </div>
    </div>
  );
};

QuoteDetail.propTypes = {
  quote: PropTypes.object,
};

export default QuoteDetail;
