import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import AppContainer from '../AppContainer';
import BodyContainer from '../BodyContainer';
import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/Colors';
import ContentContainer from '../../styled-components/ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';
import {
  answers,
  comments,
  loggedUser,
  questions,
  users
} from '../../data/data';
import ResponseCard from './ResponseCard';

export default class IndividualQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvotes: questions.find(
        question => question.questionId == this.props.match.params.questionId
      ).upvotes,
      downvotes: questions.find(
        question => question.questionId == this.props.match.params.questionId
      ).upvotes,
      haveUpvoted: false,
      haveVoted: false,
      haveDownvoted: false
    };
  }

  handleVote = stateKey => {
    this.setState({
      [stateKey]: this.state[stateKey] + 1,
      haveVoted: true,
      haveDownvoted: [stateKey] === 'downvotes' ? true : this.state[stateKey]
    });
  };

  render() {
    const currentQuestion = questions.find(
      question => question.questionId == this.props.match.params.questionId
    );
    const questionAuthor = users.find(
      user => user.userId === currentQuestion.authorId
    );

    const responses = currentQuestion.answers.map((questionAnswer, i) => {
      const currentAnswer = answers.find(
        answer => answer.answerId === questionAnswer
      );
      const currentAnswerAuthor = users.find(
        user => user.userId === currentAnswer.authorId
      );
      const currentAnswerComments = currentAnswer.comments.length
        ? currentAnswer.comments.map((currentAnswerComment, i) => {
            const currentComment = comments.find(
              comment => comment.commentId === currentAnswerComment
            );
            const currentCommentAuthor = users.find(
              user => user.userId === currentComment.authorId
            );
            return (
              <ResponseCard
                secondary
                key={i}
                authorPicUrl={currentCommentAuthor.imgUrl}
                authorFirstName={currentCommentAuthor.firstName}
                authorId={currentCommentAuthor.userId}
                text={currentComment.comment}
                dateAdded={currentComment.dateAdded}
                downvotes={currentComment.downvotes}
                upvotes={currentComment.upvotes}
              />
            );
          })
        : null;

      return (
        <ResponseContainer>
          <ResponseCard
            key={i}
            authorId={currentAnswerAuthor.userId}
            authorPicUrl={currentAnswerAuthor.imgUrl}
            authorFirstName={currentAnswerAuthor.firstName}
            text={currentAnswer.answer}
            dateAdded={currentAnswer.dateAdded}
            downvotes={currentAnswer.downvotes}
            upvotes={currentAnswer.upvotes}
          />
          {currentAnswerComments}
          <StyledButton>
            {currentAnswerComments
              ? <span>
                  <Activity>continue</Activity> discussion
                </span>
              : <Activity>comment</Activity>}
          </StyledButton>
        </ResponseContainer>
      );
    });

    return (
      <AppContainer>
        <Header
          rightComponent={
            <QuestionStatusContainer>
              <span>Last time discussed </span>
              <Time>
                {' '}{moment(currentQuestion.dateLastCommented).fromNow()}
              </Time>
            </QuestionStatusContainer>
          }
          singleQuestion
        />
        <BodyContainer>
          <ContentContainer singleQuestion>
            <QuestionCard
              authorId={questionAuthor.userId}
              individualQuestion
              mainImgSrc={questionAuthor.imgUrl}
              name={questionAuthor.firstName}
              handleVote={this.handleVote}
              question={currentQuestion.question}
              votingData={this.state}
              questionText={currentQuestion.questionText}
              isOnShelf={loggedUser.questionsFollowed.includes(
                currentQuestion.questionId
              )}
            />
            <ResponseSection>
              <ResponseSectionHeader>
                <Number>{currentQuestion.answers.length}</Number>{' '}
                {currentQuestion.answers.length !== 1 ? 'peers' : 'peer'}{' '}
                already answered Eva
              </ResponseSectionHeader>

              {responses}
            </ResponseSection>
          </ContentContainer>
        </BodyContainer>
      </AppContainer>
    );
  }
}

const Activity = styled.span`text-transform: uppercase;`;

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
`;

const QuestionStatusContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-self: center;
  font-style: italic;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
`;

const ResponseSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 2rem;
`;

const ResponseSectionHeader = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Crimson Text';
  font-weight: bold;
  font-style: italic;
  margin-top: 4rem;
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

const Time = styled.span`
  margin-left: .5rem;
  margin-right: .5rem;
`;
