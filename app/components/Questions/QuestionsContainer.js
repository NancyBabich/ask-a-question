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
      searchWord: '',
      sortByHot: false
    };
  }

  handleSearch = searchInput => {
    this.setState({ searchWord: searchInput });
  };

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
      (buttonName === 'recent' && this.state.sortByHot) ||
      (buttonName === 'hot' && !this.state.sortByHot)
    ) {
      this.setState({
        sortByHot: !this.state.sortByHot
      });
    }
  };

  render() {
    const {
      displayAllQuestions,
      questionsDisplayed,
      searchWord,
      sortByHot
    } = this.state;

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

    const selectedQuestions = questions.filter(question =>
      question.question.toUpperCase().includes(searchWord.toUpperCase())
    );

    const filteredQuestions = displayAllQuestions
      ? selectedQuestions
      : selectedQuestions.filter(question =>
          loggedUser.questionsFollowed.includes(question.questionId)
        );

    const sortedQuestions = sortByHot
      ? filteredQuestions.sort((a, b) => {
          if (a.isHot === b.isHot) {
            return 0;
          } else if (a.isHot) {
            return -1;
          } else return 1;
        })
      : filteredQuestions.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );

    const questionCards = filteredQuestions
      .map(getUser)
      .slice(0, this.state.questionsDisplayed);

    return (
      <StyledContainer>
        <Header
          handleSearch={this.handleSearch}
          searchBar
          rightComponent={
            <FilterSort
              displayAllQuestions={displayAllQuestions}
              handleDisplayChange={this.toggleDisplaySettings}
              sortByHot={sortByHot}
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
