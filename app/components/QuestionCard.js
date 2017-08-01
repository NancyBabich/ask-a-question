import React from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';

const QuestionCard = () =>
  <QuestionCardContainer>
    <MainCard>
      <ActivityCardsContainer>
        <ActivityCard>hej</ActivityCard>
      </ActivityCardsContainer>
    </MainCard>
  </QuestionCardContainer>;

export default QuestionCard;

const ActivityCard = styled.div`
  display: flex;
  height: 90%;
  width: 20%;
  background-color: ${Colors.lightGray};
`;

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
