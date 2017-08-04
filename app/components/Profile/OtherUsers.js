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
  </OtherUsersContainer>;

export default OtherUsers;

const OtherUsersContainer = styled.div`
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

const UserCards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
