import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

const ActivityCards = () => {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let activityCards = keys.slice(0, 4).map((key, i) => {
    return (
      <ActivityCard
        key={i}
        activity="commented"
        imgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
    );
  });

  return keys.length <= 5
    ? <StyledDiv>
        {activityCards}
      </StyledDiv>
    : <StyledDiv>
        <RemainingActivitiesCard>
          <NumberContainer>
            {keys.length - 4}
          </NumberContainer>
          <TextContainer>more activities</TextContainer>
        </RemainingActivitiesCard>
        {activityCards}
      </StyledDiv>;
};

export default ActivityCards;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1rem;
`;

const RemainingActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 20%;
  margin: .25rem;
  padding: .5rem 0;
  font-size: .5em;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  font-family: 'Crimson Text';
  font-size: 1rem;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`;
