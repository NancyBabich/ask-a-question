import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/colors';
import HowItAllStarted from './HowItAllStarted';
import HotDiscussion from './HotDiscussion';
import OtherUsers from './OtherUsers';
import ProfileHeader from './ProfileHeader';
import UserHistoryStats from './UserHistoryStats';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activityLevel: '',
      dateJoined: '',
      discussions: [],
      findings: [],
      imgUrl: '',
      lastLogged: '',
      lastName: '',
      peers: [],
      questionsAsked: [],
      userId: '',
      title: '',
      users: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    fetch('https://aqueous-lowlands-16989.herokuapp.com/users')
      .then(res => res.json())
      .then(usersObj => {
        const users = usersObj['users'];

        const profileOwner = users.find(
          user => user.userId == this.props.match.params.userId
        );

        const {
          activityLevel,
          dateJoined,
          discussions,
          findings,
          imgUrl,
          lastLogged,
          lastName,
          peers,
          questionsAsked,
          userId,
          title
        } = profileOwner;

        this.setState({
          activityLevel,
          dateJoined,
          discussions,
          findings,
          imgUrl,
          lastLogged,
          lastName,
          peers,
          questionsAsked,
          userId,
          title,
          users
        });
      });
  }

  render() {
    const { history } = this.props;

    const {
      activityLevel,
      dateJoined,
      discussions,
      findings,
      imgUrl,
      lastLogged,
      lastName,
      peers,
      questionsAsked,
      userId,
      title
    } = this.state;

    return (
      <Modal>
        <ProfileContainer>
          <UserHistory>
            <ProfileHeader
              activityLevel={activityLevel}
              dateJoined={dateJoined}
              history={history}
              lastLogged={lastLogged}
              lastName={lastName}
              profileOwnerPicUrl={imgUrl}
              title={title}
            />
            <HowItAllStarted />
            <UserHistoryStats
              dateJoined={dateJoined}
              discussions={discussions}
              findings={findings}
              peers={peers}
              questionsAsked={questionsAsked}
            />
            <OtherUsers
              dateJoined={dateJoined}
              profileOwnerId={userId}
              users={this.state.users}
            />
          </UserHistory>
          <HotDiscussion />
        </ProfileContainer>
      </Modal>
    );
  }
}

export default withRouter(Profile);

const Modal = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5% 0;
  width: 100%;
  height: 200vh;
  z-index 3;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    padding-top: 0;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: auto;
  background-color: white;
  padding-top: 3rem;
  color: ${Colors.gray};

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }
`;

const UserHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: auto;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 95%;
  }
`;
