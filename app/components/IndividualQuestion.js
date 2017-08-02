import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../styled-components/ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';

const IndividualQuestion = () =>
  <ContentContainer>
    <Header
      rightComponent={
        <QuestionStatusContainer>
          Last time discussed 1 day ago
        </QuestionStatusContainer>
      }
    />
    <QuestionCard
      individualQuestion
      mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
    />
  </ContentContainer>;

export default IndividualQuestion;

const QuestionStatusContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-style: italic;
`;
