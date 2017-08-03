import React from 'react';
import styled from 'styled-components';

import AppContainer from './AppContainer';
import ContentContainer from '../styled-components/ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';

const IndividualQuestion = () =>
  <AppContainer>
    <Header
      rightComponent={
        <QuestionStatusContainer>
          Last time discussed 1 day ago
        </QuestionStatusContainer>
      }
      singleQuestion
    />
    <ContentContainer>
      <QuestionCard
        individualQuestion
        mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
    </ContentContainer>
  </AppContainer>;

export default IndividualQuestion;

const QuestionStatusContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-style: italic;
`;
