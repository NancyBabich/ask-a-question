import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';
import QuestionCardBody from './QuestionCardBody';
import QuestionCardHeader from './QuestionCardHeader';

const QuestionCard = ({
  authorId,
  conversations,
  discussions,
  downvotes,
  questionAnswers,
  questionComments,
  individualQuestion,
  isOnShelf,
  mainImgSrc,
  name,
  peersInvolved,
  question,
  questionId,
  questionText,
  status,
  upvotes
}) =>
  <QuestionCardContainer individualQuestion={individualQuestion}>
    <QuestionCardHeader
      authorId={authorId}
      individualQuestion={individualQuestion}
      isOnShelf={isOnShelf}
      mainImgSrc={mainImgSrc}
      name={name}
      question={question}
      questionId={questionId}
    />

    <QuestionCardBody
      conversations={conversations}
      discussions={discussions}
      downvotes={downvotes}
      individualQuestion={individualQuestion}
      peersInvolved={peersInvolved}
      questionAnswers={questionAnswers}
      questionComments={questionComments}
      questionText={questionText}
      status={status}
      upvotes={upvotes}
    />
  </QuestionCardContainer>;

export default QuestionCard;

const QuestionCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 23rem;
  border-bottom: solid 1px ${Colors.lightGray};
  background-color: white;
  padding-bottom: ${ifProp('individualQuestion', '0', '3rem')};
  margin-top: 1px;
  box-shadow: 4px 0px 5px 0px rgba(50, 50, 50, 0.47);
`;
