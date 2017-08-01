import React from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';

const QuestionCard = () =>
  <QuestionCardContainer>
    <MainCard>
      <ActivityCardsContainer>hej</ActivityCardsContainer>
    </MainCard>
  </QuestionCardContainer>;

export default QuestionCard;

const ActivityCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80%;
  height: 80%;
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
