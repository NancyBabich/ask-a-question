import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Breakpoints from '../../consts/Breakpoints';
import Colors from '../../consts/Colors';
import Container from '../../styled-components/Container';
import HowItAllStarted from './HowItAllStarted';
import HotDiscussion from './HotDiscussion';
import OtherUsers from './OtherUsers';
import ProfileHeader from './ProfileHeader';
import { users } from '../../data/data';
import UserHistoryStats from './UserHistoryStats';

const Profile = ({ history, match }) => {
  const profileOwner = users.find(user => user.userId == match.params.userId);

  return (
    <Modal>
      <ProfileContainer>
        <UserHistory>
          <ProfileHeader history={history} profileOwner={profileOwner} />
          <HowItAllStarted />
          <UserHistoryStats />
          <OtherUsers />
        </UserHistory>
        <HotDiscussion />
      </ProfileContainer>
    </Modal>
  );
};

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
  padding-top: 5%;
  height: 150vh;
  width: 100%;
  z-index: 3;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    padding-top: 0;
  }
`;

const ProfileContainer = Container.extend`
  width: 50%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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
`;
