import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onInputChange }) => (
    <input 
        value={value}
        onChange={onInputChange} 
    />
);

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
};

export default Input;