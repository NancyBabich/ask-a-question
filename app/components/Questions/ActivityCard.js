import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from './../../consts/Colors';
import ProfilePicture from './../../styled-components/ProfilePicture';

const ActivityCard = ({ activity, imgSrc, isAnswer }) =>
  <StyledDiv>
    <ProfilePicture src={imgSrc} />
    <ActivityType isAnswer={isAnswer}>
      {activity}
    </ActivityType>
    <Dot isAnswer={isAnswer} />
  </StyledDiv>;

export default ActivityCard;

const ActivityType = styled.div`
  border-top: solid ${ifProp('isAnswer', '2px', '1px')};
  text-transform: uppercase;
  padding: .25rem 0;
  font-size: .75rem;
`;

const Dot = styled.div`
  position: absolute;
  bottom: -.3rem;
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  background-color: ${ifProp(
    'isAnswer',
    `${Colors.darkGray}`,
    `${Colors.gray}`
  )};
`;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 20%;
  background-color: ${Colors.lightGray};
  margin: .25rem;
  font-size: .5em;
  padding: .5rem 0;
  &:last-child {
    margin-right: 0;
  }
`;
