import React from 'react';

const Quote = ({ quote, onQuoteSelect }) => {
    
    const imageUrl = quote.image;

    return (
        <li onClick={() => onQuoteSelect(quote)} className="list-group-item">
            <div className="media">
                <img className="mr-3 mini-quote-img" src={imageUrl} />
                <div className="media-body">
                    <h5 className="mt-0">{quote.character}</h5>
                    <p>{quote.quote.substring(0, 20)}...</p>
                </div>
            </div>
        </li>
    );
};

export default Quote;
