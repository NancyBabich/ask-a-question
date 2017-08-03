import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { history } from '../history';

import AppContainer from './AppContainer';
import IndividualQuestion from './IndividualQuestion';
import Profile from './Profile';
import Questions from './Questions';

export default class App extends Component {
  previousLocation = this.props;

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
    //const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Router history={history}>
          <div>
            <Switch location={isModal ? this.previousLocation : location}>
              {/*<Router history={history}>*/}
              <AppContainer>
                <Route exact path="/" component={Questions} />
                <Route path="/new" component={IndividualQuestion} />
                {/*<Route path="/profile" component={Profile} />*/}
              </AppContainer>
              {isModal ? <Route path="/profile" component={Profile} /> : null}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
