import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import Centered from '../../styled-components/Centered';
import Container from '../../styled-components/Container';
import HowItAllStarted from './HowItAllStarted';
import NavButton from '../../styled-components/NavButton';
import ProfileHeader from './ProfileHeader';
import ProfilePicture from '../../styled-components/ProfilePicture';
import UserStatsTile from './UserStatsTile';

const Profile = ({ history }) =>
  <Modal>
    <ProfileContainer>
      <UserHistory>
        <ProfileHeader history={history} />
        <HowItAllStarted />

        <SectionTitle>
          That's where we have been these past 5 months ago
        </SectionTitle>
        <UserHistoryStats>
          <UserStats>
            <UserStatsTile rotation="0" number="46" fact="peers" />
            <UserStatsTile rotation="0" number="29" fact="discussions" />
          </UserStats>
          <UserStats />
        </UserHistoryStats>
        <OtherUsers>
          <SectionTitle>Who joined the platform that same period</SectionTitle>
          <UserCards>
            <OtherUserCardContainer>
              <OtherUserCard>
                <ProfilePicture src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/mens-brown-short-pompadour-hairstyle.jpg" />
              </OtherUserCard>
              <OtherUserName>S.E.N. Waweru</OtherUserName>
            </OtherUserCardContainer>
            <OtherUserCardContainer>
              <OtherUserCard>
                <ProfilePicture src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/mens-brown-short-pompadour-hairstyle.jpg" />
              </OtherUserCard>
              <OtherUserName>Patricia</OtherUserName>
            </OtherUserCardContainer>
            <OtherUserCardContainer>
              <OtherUserCard>
                <ProfilePicture src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/mens-brown-short-pompadour-hairstyle.jpg" />
              </OtherUserCard>
              <OtherUserName>Joseph Aluoch</OtherUserName>
            </OtherUserCardContainer>
          </UserCards>
        </OtherUsers>
      </UserHistory>
      <Discussion>
        <SectionTitle>The hottest discussions these days</SectionTitle>
        <DiscussionDetails>
          <AbsolutePofilePictureContainer>
            <ProfilePicture src="http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg" />
          </AbsolutePofilePictureContainer>
          <DiscussionDescription>
            <UserName>Andrew</UserName>found the Guardian article
          </DiscussionDescription>
          <DiscussionTopic>
            Vegan diet to stop diabetes progress
          </DiscussionTopic>
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
      </Discussion>
    </ProfileContainer>
  </Modal>;

export default withRouter(Profile);

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

const OtherUsers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;

  align-items: center;
`;

const OtherUserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lightGray};
  height: 5rem;
  width: 5rem;
`;

const OtherUserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherUserName = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.darkBlue};
  font-weight: 700;
`;

const ProfileContainer = Container.extend`
  width: 50%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  color: ${Colors.gray};
`;

const UserCards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UserHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: auto;
  align-items: center;
`;

const UserHistoryStats = styled.div`
  display: flex;
  width: 100%;
`;

const UserName = styled.div`
  color: ${Colors.darkBlue};
  text-transform: none;
`;

const SectionTitle = styled.div`
  text-transform: uppercase;
  color: ${Colors.gray};
  margin-top: 3rem;
`;

const AbsolutePofilePictureContainer = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  top: -1.75rem;
  left: 50%;
  transform: translateX(-50%);
`;

const UserStats = styled.div`
  position: relative;
  width: 50%;
`;
