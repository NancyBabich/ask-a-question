import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import CloseButton from './CloseButton';
import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';

const ProfileHeader = ({ history }) =>
  <ProfileHeaderContainer>
    <CloseButton history={history} />
    <ProfilePicture
      big
      src="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
    />
    <Name>Dr. Halima</Name>
    <UserSummary>
      <ActivityContainer>
        <Activity>member for</Activity>
        <ActivityTime>5 months</ActivityTime>
      </ActivityContainer>
      <ActivityContainer>
        <Activity>last seen</Activity>
        <ActivityTime>Saturday afternoon</ActivityTime>
      </ActivityContainer>
      <ActivityContainer>
        <Activity>activity level</Activity>
        <ActivitySymbolsContainer>
          <ActivitySymbol />
          <ActivitySymbol />
          <ActivitySymbol />
        </ActivitySymbolsContainer>
      </ActivityContainer>
    </UserSummary>
  </ProfileHeaderContainer>;

export default ProfileHeader;

const Activity = styled.span`
  text-transform: uppercase;
  font-weight: 700;
`;

const ActivityContainer = styled.div`display: flex;`;

const ActivitySymbolsContainer = styled.div`
  display: flex;
  margin-left: .5rem;
`;

const ActivitySymbol = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${Colors.pink};
  margin: 0 .1rem;
`;

const ActivityTime = styled.span`
  font-weight: 700;
  color: ${Colors.darkGray};
  padding-left: .5rem;
`;

const Name = styled.div`
  color: ${Colors.darkBlue};
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const UserSummary = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: .75em;
  padding: 1rem 0 2rem 0;
  border-bottom: solid 1px ${Colors.gray};
  margin-bottom: 2rem;
`;
