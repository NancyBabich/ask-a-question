import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';
import ProfileSectionTitle from './ProfileSectionTitle';

const OtherUsers = () =>
  <OtherUsersContainer>
    <ProfileSectionTitle>
      Who joined the platform that same period
    </ProfileSectionTitle>
    <UserCards>
      <OtherUserCardContainer>
        <OtherUserCard>
          <ProfilePicture src="https://s-media-cache-ak0.pinimg.com/736x/7e/92/e3/7e92e3bc2f433cf2c87d1bf870f506c4--square-face-hairstyles-wavy-bob-hairstyles.jpg" />
        </OtherUserCard>
        <OtherUserName>S.E.N. Waweru</OtherUserName>
      </OtherUserCardContainer>
      <OtherUserCardContainer>
        <OtherUserCard>
          <ProfilePicture src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/087/3bb/1f6a219.jpg" />
        </OtherUserCard>
        <OtherUserName>Patricia</OtherUserName>
      </OtherUserCardContainer>
      <OtherUserCardContainer>
        <OtherUserCard>
          <ProfilePicture src="https://media1.popsugar-assets.com/files/thumbor/jTRjxXgxI-nNBHKof7ju_46Paho/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/02/092/n/1922153/e43c9ee6cc77c5e6_razorsquare.jpg" />
        </OtherUserCard>
        <OtherUserName>Joseph Aluoch</OtherUserName>
      </OtherUserCardContainer>
    </UserCards>
  </OtherUsersContainer>;

export default OtherUsers;

const OtherUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
  margin-top: .5rem;
`;

const UserCards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;
