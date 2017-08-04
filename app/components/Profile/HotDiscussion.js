import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';
import ProfileSectionTitle from './ProfileSectionTitle';

const HotDiscussion = () =>
  <Discussion>
    <ProfileSectionTitle>
      The hottest discussions these days
    </ProfileSectionTitle>
    <DiscussionDetails>
      <AbsolutePofilePictureContainer>
        <ProfilePicture src="http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg" />
      </AbsolutePofilePictureContainer>
      <DiscussionDescription>
        <UserName>Andrew</UserName>found the Guardian article
      </DiscussionDescription>
      <DiscussionTopic>Vegan diet to stop diabetes progress</DiscussionTopic>
      <DiscussionStats>
        <DiscussionStatsUnit>
          <DiscussionFact>6 peers involved</DiscussionFact>
          <DiscussionFact>3 related discussions</DiscussionFact>
        </DiscussionStatsUnit>
        <DiscussionStatsUnit>
          <DiscussionFact>6 peers involved</DiscussionFact>
          <DiscussionFact>3 related discussions</DiscussionFact>
        </DiscussionStatsUnit>
      </DiscussionStats>
    </DiscussionDetails>
  </Discussion>;

export default HotDiscussion;

const AbsolutePofilePictureContainer = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  top: -1.75rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Discussion = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const DiscussionDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  color: ${Colors.gray};
  margin-top: 3.5rem;
`;

const DiscussionDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Colors.lightGray};
  margin-top: 3rem;
`;

const DiscussionFact = styled.div`
  width: 50%;
  text-align: center;
`;

const DiscussionStats = styled.div`
  display: flex;
  width: 75%;
  height: 5rem;
`;

const DiscussionStatsUnit = styled.div`
  display: flex;
  width: 50%;
`;

const DiscussionTopic = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.darkBlue};
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 700;
`;

const UserName = styled.div`
  color: ${Colors.darkBlue};
  text-transform: none;
`;
