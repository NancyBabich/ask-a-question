import React from 'react';
import styled from 'styled-components';

import ActivityCard from './../components/ActivityCard';
import Colors from './../consts/Colors';

const QuestionCard = () => {
  const keys = [1, 2, 3, 4, 5, 6];

  let activityCards = keys.slice(0, 4).map((key, i) => {
    return (
      <ActivityCard
        key={i}
        activity={i + 1}
        imgSrc="https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg"
      />
    );
  });

  return (
    <QuestionCardContainer>
      <MainCard>
        {keys.length <= 5
          ? <ActivityCardsContainer>activityCards</ActivityCardsContainer>
          : <ActivityCardsContainer>
              <RemainingActivitiesCard>
                {keys.length - 4} more activities
              </RemainingActivitiesCard>
              {activityCards}
            </ActivityCardsContainer>}
      </MainCard>
    </QuestionCardContainer>
  );
};

export default QuestionCard;

const ActivityCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 80%;
  height: 70%;
  padding: 1rem 0 0 1rem;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 80%;
  width: 80%;
  background-color: ${Colors.lightBlue};
`;

const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 15rem;
  margin-top: 10rem;
  border: solid 1px black;
`;

const RemainingActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 90%;
  width: 20%;
  margin: .25rem;
  font-size: .5em;
`;
