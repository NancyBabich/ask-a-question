import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../consts/Colors';
import Centered from '../styled-components/Container';
import Container from '../styled-components/Container';
import ProfilePicture from '../styled-components/ProfilePicture';

const Profile = () =>
  <Modal>
    <ProfileContainer>
      <CloseButton>
        <CloseButtonBar />
        <CloseButtonBar />
      </CloseButton>
      <ProfilePicture
        big
        src="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
      <Name>Dr. Halima</Name>
      <Centered />
    </ProfileContainer>
  </Modal>;

export default Profile;

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
  background-color: ${Colors.darkGray};
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
`;

const Name = styled.div`
  color: ${Colors.darkBlue};
  font-weight: 700;
`;

const ProfileContainer = Container.extend`
  width: 70%;
  height: 80%;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 3% 5%;
`;
