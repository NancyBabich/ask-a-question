import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import PrimaryResponseCard from './PrimaryResponseCard';
import SecondaryResponseCard from './SecondaryResponseCard';
import AppContainer from './../AppContainer';
import Breakpoints from '../../consts/Breakpoints';
import Colors from '../../consts/Colors';
import ContentContainer from '../../styled-components/ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';
import { questions, users } from '../../data/data';

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

    return (
      <AppContainer>
        <Header
          rightComponent={
            <QuestionStatusContainer>
              Last time discussed{' '}
              {moment(currentQuestion.dateLastCommented).fromNow()}
            </QuestionStatusContainer>
          }
          singleQuestion
        />
        <ContentContainer>
          <QuestionCard
            individualQuestion
            mainImgSrc={questionAuthor.imgUrl}
            name={questionAuthor.firstName}
            handleVote={this.handleVote}
            question={currentQuestion.question}
            votingData={this.state}
            questionText={currentQuestion.questionText}
          />
          <ResponseSection>
            <ResponseSectionHeader>
              <Number>{currentQuestion.answers.length}</Number>{' '}
              {currentQuestion.answers.length !== 1 ? 'peers' : 'peer'} already
              answered Eva
            </ResponseSectionHeader>
            <ResponseContainer>
              <PrimaryResponseCard />
              <SecondaryResponseCard />
              <StyledButton>
                <Activity>continue </Activity> discussion
              </StyledButton>
            </ResponseContainer>
            <ResponseContainer>
              <PrimaryResponseCard />
              <StyledButton>
                <Activity>comment</Activity>
              </StyledButton>
            </ResponseContainer>
          </ResponseSection>
        </ContentContainer>
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

  @media screen and (max-width: ${Breakpoints.mobile}) {
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
