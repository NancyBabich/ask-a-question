import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from './../../consts/colors';
import ProfilePicture from './../../styled-components/ProfilePicture';

const ActivityCard = ({ activity, authorId, imgSrc, isAnswer }) => {
  const link = {
    pathname: `/profile/${authorId}`,
    state: { modal: true }
  };

  return (
    <StyledDiv>
      <Link to={link}>
        <ProfilePicture src={imgSrc} />
      </Link>
      <ActivityType isAnswer={isAnswer}>
        {activity}
      </ActivityType>
      <Dot isAnswer={isAnswer} />
    </StyledDiv>
  );
};

export default withRouter(ActivityCard);

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
  height: 85%;
  width: 20%;
  background-color: ${Colors.lightGray};
  margin: 0 .25rem;
  font-size: .5rem;
  padding: .5rem 0;
  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 555px) {
    width: 50%;
    height: 99%;
  }
`;
