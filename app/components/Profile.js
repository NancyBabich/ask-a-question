import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../consts/Colors';
import Centered from '../styled-components/Container';
import Container from '../styled-components/Container';
import ProfilePicture from '../styled-components/ProfilePicture';

const Profile = ({ history }) =>
  <Modal>
    <ProfileContainer>
      <CloseButton onClick={() => history.go(-1)}>
        <CloseButtonBar />
        <CloseButtonBar />
      </CloseButton>
      <ProfilePicture
        big
        src="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
      <Name>Dr. Halima</Name>
      <UserSummary>
        <div>
          <Activity>member</Activity> for 5 months
        </div>
        <div>
          <Activity>last seen</Activity> Saturday afternoon
        </div>
        <div>
          <Activity>activity level</Activity>
        </div>
      </UserSummary>
    </ProfileContainer>
  </Modal>;

export default withRouter(Profile);

const Activity = styled.span`text-transform: uppercase;`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButtonBar = styled.div`
  position: absolute;
  background-color: ${Colors.gray};
  width: 15px;
  height: 2px;
  left: 2px;
  bottom: 9px;
  &:first-child {
    transform: rotate(45deg);
  }
  &:last-child {
    transform: rotate(-45deg);
  }
`;

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

const Name = styled.div`
  color: ${Colors.darkBlue};
  font-weight: 700;
`;

const ProfileContainer = Container.extend`
  width: 40%;
  height: 80%;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 3% 15%;
`;

const UserSummary = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: .75em;
  padding: 2rem 0;
  border-bottom: solid 1px ${Colors.gray};
`;
