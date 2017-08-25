import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';
import QuestionCardBody from './QuestionCardBody';
import QuestionCardHeader from './QuestionCardHeader';

const QuestionCard = ({
  answers,
  authorId,
  comments,
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
  upvotes,
  users
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
      answers={answers}
      comments={comments}
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
      users={users}
    />
    {individualQuestion &&
      <StyledButton>
        <Activity>give</Activity> new answer
      </StyledButton>}
  </QuestionCardContainer>;

export default QuestionCard;

const Activity = styled.span`text-transform: uppercase;`;

const QuestionCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;
  border-bottom: solid 1px ${Colors.lightGray};
  background-color: white;
  padding-bottom: ${ifProp('individualQuestion', '0', '3rem')};
  margin-top: 1px;
  box-shadow: 4px 0px 5px 0px rgba(50, 50, 50, 0.47);
`;

const StyledButton = styled.div`
  position: absolute;
  width: 125px;
  height: 30px;
  border: solid 1px ${Colors.gray};
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: white;
  vertical-align: middle;
  font-size: .8rem;
  font-weight: 700;
  line-height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
