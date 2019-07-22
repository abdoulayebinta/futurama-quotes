import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const QuoteDetail = ({ quote }) => {
    if(!quote) {
        return <h2>Loading <FaSpinner /></h2>
    }

    const imageUrl = quote.image;

    return (
        <div className="quote-detail col-md-8 float-md-left">
            <div className="card">
                <img src={imageUrl} className="quote-img card-img-top" alt="Character Image" />
                <div className="card-body details">
                    <h5 className="card-title">{quote.character}</h5>
                    <p className="card-text">{quote.quote}</p>
                </div>
            </div>
        </div>
    );

};

export default QuoteDetail;