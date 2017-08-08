import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ContentContainer from '../../styled-components/ContentContainer';
import { loggedUser, questions, users } from '../../data/data';
import FilterSort from './FilterSort';
import Header from './Header';
import QuestionCard from './QuestionCard';

export default class QuestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAllQuestions: false,
      questionsDisplayed: 3,
      showHot: false
    };
  }

  toggleDisplaySettings = buttonName => {
    if (
      (buttonName === 'allQuestions' && !this.state.displayAllQuestions) ||
      (buttonName === 'myShelf' && this.state.displayAllQuestions === true)
    ) {
      this.setState({
        displayAllQuestions: !this.state.displayAllQuestions
      });
    }

    if (
      (buttonName === 'recent' && this.state.showHot) ||
      (buttonName === 'hot' && !this.state.showHot)
    ) {
      this.setState({
        showHot: !this.state.showHot
      });
    }
  };

  render() {
    const { displayAllQuestions, questionsDisplayed, showHot } = this.state;

    const getUser = question => {
      const currentUser = users.find(user => user.userId === question.authorId);

      return (
        <QuestionCard
          key={question.questionId}
          name={currentUser.firstName}
          question={question.question}
          mainImgSrc={currentUser.imgUrl}
          status={question.status}
        />
      );
    };

    const filteredQuestions = displayAllQuestions
      ? questions
      : questions.filter(question =>
          loggedUser.questionsFollowed.includes(question.questionId)
        );

    const questionCards = filteredQuestions
      .map(getUser)
      .slice(0, this.state.questionsDisplayed);

    return (
      <StyledContainer>
        <Header
          searchBar
          rightComponent={
            <FilterSort
              displayAllQuestions={displayAllQuestions}
              handleDisplayChange={this.toggleDisplaySettings}
              showHot={showHot}
            />
          }
        />
        <ContentContainer>
          {questionCards}
          {filteredQuestions.length > questionsDisplayed &&
            <LoadMoreContainer>
              <StyledButton
                onClick={() =>
                  this.setState({
                    questionsDisplayed: questionsDisplayed + 3
                  })}
              >
                load more questions
              </StyledButton>
            </LoadMoreContainer>}
        </ContentContainer>
      </StyledContainer>
    );
  }
}

const LoadMoreContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const StyledButton = styled.div`
  color: ${Colors.pink};
  font-weight: 700;
  padding: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`width: 100%;`;
