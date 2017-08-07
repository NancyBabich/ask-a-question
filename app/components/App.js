import React, { Component } from 'react';
import { BrowserRouter as Router, Route/*, Switch*/ } from 'react-router-dom';
//import { history } from '../history';

import AppContainer from './AppContainer';
//import IndividualQuestion from './Questions/IndividualQuestion';
//import Profile from './Profile/Profile';
//import Questions from './Questions/Questions';
import ModalSwitch from './ModalSwitch';

export default class App extends Component {
  // previousLocation = this.props;

  // componentWillUpdate(nextProps) {
  //   const { location } = this.props;

  //   if (
  //     nextProps.history.action !== 'POP' &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location;
  //   }
  // }

  render() {
    //const { location } = this.props;

    // const isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // );

    return (
      <Router>
        {/*<AppContainer>*/}
          <Route component={ModalSwitch} />
          {/*<Route path="/new" component={IndividualQuestion} />
          <Route component={Profile} path="/profile" />*/}
        {/*</AppContainer>*/}
      </Router>
    );
  }
}
