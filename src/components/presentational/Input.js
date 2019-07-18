import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, handleChange }) => (
    <div className="">
        <input 
            value={value}
            onChange={handleChange} />
    </div>
);

Input.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;