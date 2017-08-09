import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from './AppContainer';
import IndividualQuestion from './Questions/IndividualQuestion';
import Profile from './Profile/Profile';
import Questions from './Questions/Questions';

export default class ModalSwitch extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <AppContainer>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Questions} />
          <Route path="/new" component={IndividualQuestion} />
        </Switch>
        {isModal ? <Route path="/profile/:userId" component={Profile} /> : null}
      </AppContainer>
    );
  }
}
