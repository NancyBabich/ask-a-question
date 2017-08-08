import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ModalSwitch from './ModalSwitch';

const App = () =>
  <Router>
    <Route component={ModalSwitch} />
  </Router>;

export default App;
