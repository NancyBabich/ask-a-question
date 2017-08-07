import React from 'react';
import styled from 'styled-components';

import Breakpoints from '../../consts/Breakpoints';
import ProfileSectionTitle from './ProfileSectionTitle';
import UserStatsTile from './UserStatsTile';

const UserHistoryStats = () =>
  <ProfileSectionContainer>
    <ProfileSectionTitle>
      That's where we have been these past 5 months ago
    </ProfileSectionTitle>
    <UserHistoryStatsContainer>
      <UserStats>
        <UserStatsTile rotation="50" number="46" fact="peers" />
        <UserStatsTile
          rotation="65"
          number="29"
          fact="discussions"
          translateX="20"
        />
      </UserStats>
      <UserStats>
        <UserStatsTile rotation="50" number="19" fact="findings" />
        <UserStatsTile
          rotation="65"
          number="10"
          fact="questions"
          translateX="20"
        />
      </UserStats>
    </UserHistoryStatsContainer>
  </ProfileSectionContainer>;

export default UserHistoryStats;

const ProfileSectionContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const UserHistoryStatsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const UserStats = styled.div`
  width: 50%;
  display: flex;
  &:first-child {
    justify-content: flex-end;
  }
  &:last-child {
    justify-content: flex-start;
  }
  padding: 1.25rem;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    &:first-child,
    &:last-child {
      justify-content: center;
    }
    padding: 0;
  }
`;
