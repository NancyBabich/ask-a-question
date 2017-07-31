import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

ReactDOM.render(
  <Header searchBar rightComponent={<div>dupa</div>} />,
  document.getElementById('app')
);
