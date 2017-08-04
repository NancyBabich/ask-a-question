import React from 'react';
import styled from 'styled-components';

import ProfileSectionTitle from './ProfileSectionTitle';
import UserStatsTile from './UserStatsTile';

const UserHistoryStats = () =>
  <ProfileSectionContainer>
    <ProfileSectionTitle>
      That's where we have been these past 5 months ago
    </ProfileSectionTitle>
    <UserHistoryStatsContainer>
      <UserStats>
        <UserStatsTile rotation="0" number="46" fact="peers" />
        <UserStatsTile rotation="0" number="29" fact="discussions" />
      </UserStats>
      <UserStats />
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
`;

const UserStats = styled.div`
  position: relative;
  width: 50%;
`;
