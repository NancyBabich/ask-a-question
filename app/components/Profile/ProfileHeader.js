import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Breakpoints from '../../consts/Breakpoints';
import CloseButton from './CloseButton';
import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';

const ProfileHeader = ({ history }) => {
  const activityLevel = 2;
  let activitySymbols = [];

  for (let i = 1; i <= 3; i++) {
    activitySymbols.push(
      i <= activityLevel
        ? <ActivitySymbol
            key={i}
            style={{ backgroundColor: `${Colors.pink}` }}
          />
        : <ActivitySymbol
            key={i}
            style={{ backgroundColor: `${Colors.gray}` }}
          />
    );
  }

  return (
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
            {activitySymbols}
          </ActivitySymbolsContainer>
        </ActivityContainer>
      </UserSummary>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;

const Activity = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  padding: 0 .5rem;
`;

const ActivityContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const ActivitySymbolsContainer = styled.div`
  display: flex;
  padding: 0 .5rem;
  justify-content: center;
`;

const ActivitySymbol = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${Colors.pink};
`;

const ActivityTime = styled.div`
  font-weight: 700;
  color: ${Colors.darkGray};
  padding: 0 .5rem;
  text-align: center;
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

  @media screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
