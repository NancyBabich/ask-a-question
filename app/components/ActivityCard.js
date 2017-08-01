import React from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';

const ActivityCard = ({ activity, imgSrc }) =>
  <StyledDiv>
    <ProfilePicture src={imgSrc} />
    <ActivityType>
      {activity}
    </ActivityType>
  </StyledDiv>;

export default ActivityCard;

const ActivityType = styled.div`
  border-top: solid 1px ${Colors.darkGray};
  text-transform: uppercase;
`;

const ProfilePicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 20%;
  background-color: ${Colors.lightGray};
  margin: .25rem;
  font-size: .5em;
`;
