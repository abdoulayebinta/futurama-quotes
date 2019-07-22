import React, { Component } from 'react';


const Select = (props) => {
  console.log('----------------------');
  console.log(props.handleCharacterChange);


  const options = characters.map(option => (
    <option key={option}>{option}</option>
  ));

  return (
    <div>
      <select
        value={props.value}
        onChange={props.handleCharacterChange}
      >
        {options}
      </select>
    </div>
  );
};

export default Select;
