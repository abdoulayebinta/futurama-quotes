import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pagination Component - renders a list of page numbers
 */
const Pagination = ({
  quotesPerPage, totalQuotes, paginate, previousPage, nextPage,
}) => {
  const pageNumbers = [];
  const currentPage = Math.ceil(totalQuotes / quotesPerPage);

  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="quote-list">
      <ul className="pagination justify-content-center">
        {pageNumbers.length > 1 ? <li className="page-item"><a onClick={() => previousPage()} className="page-link" href="#">Previous</a></li> : ''}
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>

        ))}
        {pageNumbers.length > 1 && pageNumbers.length <= currentPage ? <li className="page-item"><a onClick={() => nextPage()} className="page-link" href="#">Next</a></li> : ''}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  quotesPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  totalQuotes: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
