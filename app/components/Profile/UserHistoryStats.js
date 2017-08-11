import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Breakpoints from '../../consts/breakpoints';
import ProfileSectionTitle from './ProfileSectionTitle';
import UserStatsTile from './UserStatsTile';

const UserHistoryStats = ({
  dateJoined,
  discussions,
  findings,
  peers,
  questionsAsked
}) =>
  <ProfileSectionContainer>
    <ProfileSectionTitle>
      That's where we have been these past {moment(dateJoined).fromNow(true)}{' '}
      ago
    </ProfileSectionTitle>
    <UserHistoryStatsContainer>
      <UserStats>
        <UserStatsTile
          rotation="50"
          number={peers.length}
          fact={peers.length !== 1 ? 'peers' : 'peer'}
        />
        <UserStatsTile
          rotation="65"
          number={discussions.length}
          fact={discussions.length !== 1 ? 'discussions' : 'discussion'}
          translateX="20"
        />
      </UserStats>
      <UserStats>
        <UserStatsTile
          rotation="50"
          number={findings.length}
          fact={findings.length !== 1 ? 'findings' : 'finding'}
        />
        <UserStatsTile
          rotation="65"
          number={questionsAsked.length}
          fact={questionsAsked.length !== 1 ? 'questions' : 'question'}
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
