import React from 'react';
import styled from 'styled-components';

import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';
import ProfileSectionTitle from './ProfileSectionTitle';

const HotDiscussion = () =>
  <Discussion>
    <ProfileSectionTitle>The hottest discussion these days</ProfileSectionTitle>
    <DiscussionDetails>
      <AbsolutePofilePictureContainer>
        <ProfilePicture src="http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg" />
      </AbsolutePofilePictureContainer>
      <DiscussionDescription>
        <Username>Andrew</Username>found the Guardian article
      </DiscussionDescription>
      <DiscussionTopic>Vegan diet to stop diabetes progress</DiscussionTopic>
      <DiscussionStats>
        <DiscussionStatsUnit>
          <DiscussionFact>
            <DiscussionFactNumber>6</DiscussionFactNumber> peers involved
          </DiscussionFact>
          <DiscussionFact>
            <DiscussionFactNumber>3</DiscussionFactNumber> related discussions
          </DiscussionFact>
        </DiscussionStatsUnit>
        <DiscussionStatsUnit>
          <DiscussionFact>
            <DiscussionFactNumber>3</DiscussionFactNumber> conversations
          </DiscussionFact>
          <DiscussionFact>
            <DiscussionFactNumber>19</DiscussionFactNumber> upvotes
          </DiscussionFact>
        </DiscussionStatsUnit>
      </DiscussionStats>
    </DiscussionDetails>
  </Discussion>;

export default HotDiscussion;

const AbsolutePofilePictureContainer = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Discussion = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const DiscussionDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  color: ${Colors.gray};
  margin-top: 3.5rem;
  font-size: .75rem;
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
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.mobile}) {
  }
`;

const DiscussionFactNumber = styled.span`
  font-family: 'Roboto Condensed';
  padding-right: .25rem;
`;

const DiscussionStats = styled.div`
  display: flex;
  width: 75%;
  padding: 2rem 0;
  font-family: 'Crimson Text';
  font-size: .7rem;
  color: ${Colors.darkGray};
  font-weight: 700;
  font-style: italic;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DiscussionStatsUnit = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 100%;
  }
`;

const DiscussionTopic = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.darkBlue};
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Username = styled.div`
  color: ${Colors.darkBlue};
  text-transform: none;
  padding-right: 1rem;
  font-weight: 700;
`;
