import React from 'react';

function Keyboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center'
    }
  }, 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => /*#__PURE__*/React.createElement("button", {
    key: letter,
    style: {
      padding: '1rem',
      fontSize: '1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      backgroundColor: 'lightblue'
    }
  }, letter)));
}

export default Keyboard;