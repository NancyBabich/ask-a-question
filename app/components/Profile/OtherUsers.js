import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import ProfilePicture from '../styled-components/ProfilePicture';
import ProfileSectionTitle from './ProfileSectionTitle';

const OtherUsers = ({ dateJoined, profileOwnerId, users }) => {
  const otherUsers = users.filter(user => user.userId !== profileOwnerId);

  const otherUsersToDisplay = otherUsers
    .sort((a, b) => {
      const diffA = Math.abs(dateJoined - a);
      const diffB = Math.abs(dateJoined - b);
      return diffA - diffB;
    })
    .slice(0, 3);

  const closestUsersTiles = otherUsersToDisplay.map((user, i) =>
    <OtherUserCardContainer key={i}>
      <OtherUserCard>
        <ProfilePicture src={user.imgUrl} />
      </OtherUserCard>
      <OtherUserName>
        <div>
          {user.firstName}
        </div>
        <div>
          {user.lastName}
        </div>
      </OtherUserName>
    </OtherUserCardContainer>
  );

  return (
    <OtherUsersContainer>
      <ProfileSectionTitle>
        Who joined the platform that same period
      </ProfileSectionTitle>
      <UserCards>
        {closestUsersTiles}
      </UserCards>
    </OtherUsersContainer>
  );
};

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

  @media screen and (max-width: 290px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`;

const OtherUserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 .5rem;

  @media screen and (max-width: 290px) {
    margin: 0 .25rem;
  }
`;

const OtherUserName = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.darkBlue};
  font-size: .85rem;
  font-weight: 700;
  margin-top: .5rem;
`;

const UserCards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;
