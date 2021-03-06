import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import AppContainer from '../styled-components/AppContainer';
import BodyContainer from '../styled-components/BodyContainer';
import Colors from '../../consts/colors';
import ContentContainer from './ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';
import { loggedUser } from '../../data/data';
import ResponseCard from './ResponseCard';

export default class IndividualQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      comments: [],
      question: [],
      users: []
    };
  }

  componentDidMount() {
    const APIUrl = 'https://aqueous-lowlands-16989.herokuapp.com';

    const APICalls = [
      { endpoint: 'answers', dataType: 'answers' },
      { endpoint: 'comments', dataType: 'comments' },
      {
        endpoint: `questions/${this.props.match.params.questionId}`,
        dataType: 'question'
      },
      { endpoint: 'users', dataType: 'users' }
    ];

    APICalls.forEach(callData => {
      fetch(`${APIUrl}/${callData.endpoint}`)
        .then(res => res.json())
        .then(obj => {
          const data = obj[callData.dataType];
          this.setState({ [callData.dataType]: data });
        });
    });

    window.scrollTo(0, 0);
  }

  render() {
    const { answers, comments, question, users } = this.state;

    // const currentQuestion =
    //   questions.length &&
    //   questions.find(
    //     question => question.questionId == this.props.match.params.questionId
    //   );

    const questionAuthor =
      users.length && users.find(user => user.userId === question.authorId);

    const responses =
      question &&
      question.answers &&
      question.answers.map((questionAnswer, i) => {
        const currentAnswer =
          answers.length &&
          answers.find(answer => answer.answerId === questionAnswer);

        const currentAnswerAuthor =
          users.length &&
          users.find(user => user.userId === currentAnswer.authorId);

        const currentAnswerComments = currentAnswer.comments.length
          ? currentAnswer.comments.map((currentAnswerComment, i) => {
              const currentComment =
                comments.length &&
                comments.find(
                  comment => comment.commentId === currentAnswerComment
                );
              const currentCommentAuthor =
                users.length &&
                users.find(user => user.userId === currentComment.authorId);

              return (
                currentComment &&
                currentCommentAuthor &&
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
          currentAnswer &&
          currentAnswerAuthor &&
          <ResponseContainer key={i}>
            <ResponseCard
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
                {' '}{moment(question.dateLastCommented).fromNow()}
              </Time>
            </QuestionStatusContainer>
          }
          singleQuestion
        />
        <BodyContainer>
          <ContentContainer singleQuestion>
            {questionAuthor &&
              question &&
              <QuestionCard
                authorId={questionAuthor.userId}
                downvotes={question.downvotes}
                individualQuestion
                mainImgSrc={questionAuthor.imgUrl}
                name={questionAuthor.firstName}
                question={question.question}
                upvotes={question.upvotes}
                questionText={question.questionText}
                isOnShelf={loggedUser.questionsFollowed.includes(
                  question.questionId
                )}
              />}
            <ResponseSection>
              <ResponseSectionHeader>
                <Number>
                  {question && question.answers && question.answers.length
                    ? question.answers.length
                    : 'No'}
                </Number>{' '}
                {question && question.answers && question.answers.length !== 1
                  ? 'peers'
                  : 'peer'}{' '}
                {question && question.answers && !question.answers.length
                  ? ''
                  : 'already'}{' '}
                answered {questionAuthor && questionAuthor.firstName}
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

const Number = styled.span`font-style: normal;`;

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
