import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

const SecondaryCard = () => {
  const keys = [1, 2, 3, 4, 5, 6];

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
    ? <SecondaryCardContainer>activityCards</SecondaryCardContainer>
    : <SecondaryCardContainer>
        <RemainingActivitiesCard>
          <NumberContainer>
            {keys.length - 4}
          </NumberContainer>
          <div>more activities</div>
        </RemainingActivitiesCard>
        {activityCards}
      </SecondaryCardContainer>;
};

export default SecondaryCard;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;

const SecondaryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 80%;
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
