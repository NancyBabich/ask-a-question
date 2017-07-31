import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

ReactDOM.render(
  <div>
    <Header searchBar rightComponent={<div>test</div>} />
  </div>,
  document.getElementById('app')
);
