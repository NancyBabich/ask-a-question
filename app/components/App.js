import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { history } from '../history';

import AppContainer from './AppContainer';
import IndividualQuestion from './IndividualQuestion';
import Questions from './Questions';

const App = () =>
  <Router history={history}>
    <AppContainer>
      <Route exact path="/" component={Questions} />
      <Route path="/new" component={IndividualQuestion} />
    </AppContainer>
  </Router>;

export default App;
