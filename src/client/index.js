/* jsx: true */
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

/* jshint ignore:start */
ReactDOM.render(<Hello/>, document.querySelector('#root');
/* jshint ignore:end */