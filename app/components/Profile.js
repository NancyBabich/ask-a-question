import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () =>
  <ProfileContainer>
    <Text>test</Text>
  </ProfileContainer>;

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Text = styled.div`
  color: red;
  font-weight: 700;
`;
