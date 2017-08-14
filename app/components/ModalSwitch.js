import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Questions} />
          <Route path="/question/:questionId" component={IndividualQuestion} />
        </Switch>
        {isModal ? <Route path="/profile/:userId" component={Profile} /> : null}
      </div>
    );
  }
}
