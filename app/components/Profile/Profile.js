import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import Container from '../../styled-components/Container';
import HowItAllStarted from './HowItAllStarted';
import HotDiscussion from './HotDiscussion';
import OtherUsers from './OtherUsers';
import ProfileHeader from './ProfileHeader';
import UserHistoryStats from './UserHistoryStats';

const Profile = ({ history }) =>
  <Modal>
    <ProfileContainer>
      <UserHistory>
        <ProfileHeader history={history} />
        <HowItAllStarted />
        <UserHistoryStats />
        <OtherUsers />
      </UserHistory>
      <HotDiscussion />
    </ProfileContainer>
  </Modal>;

export default withRouter(Profile);

const Modal = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 5%;
  height: 100%;
  width: 100%;
`;

const ProfileContainer = Container.extend`
  width: 50%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  color: ${Colors.gray};
`;

const UserHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: auto;
  align-items: center;
`;
