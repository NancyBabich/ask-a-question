import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer';
import DisplaySettings from './components/DisplaySettings';
import Header from './components/Header';

ReactDOM.render(
  <AppContainer>
    <Header rightComponent={<DisplaySettings searchBar />} />
  </AppContainer>,
  document.getElementById('app')
);
