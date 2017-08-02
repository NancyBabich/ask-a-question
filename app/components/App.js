import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { history } from '../history';

import AppContainer from './AppContainer';
import IndividualQuestion from './IndividualQuestion';
import Profile from './Profile';
import Questions from './Questions';

const App = () =>
  <Router history={history}>
    <AppContainer>
      <Route exact path="/" component={Questions} />
      <Route path="/new" component={IndividualQuestion} />
      <Route path="/profile" component={Profile} />
    </AppContainer>
  </Router>;

export default App;
