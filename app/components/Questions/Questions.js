import React, { Component } from 'react';
import styled from 'styled-components';

import AppContainer from '../styled-components/AppContainer';
import BodyContainer from '../styled-components/BodyContainer';
import Colors from '../../consts/colors';
import ContentContainer from './ContentContainer';
import { loggedUser } from '../../data/data';
import FilterSort from './FilterSort';
import Header from './Header';
import QuestionCard from './QuestionCard';

export default class QuestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      comments: [],
      displayAllQuestions: false,
      questions: [],
      questionsDisplayed: 3,
      searchWord: '',
      sortByHot: false,
      users: []
    };
  }

  componentDidMount() {
    const APIUrl = 'https://aqueous-lowlands-16989.herokuapp.com';

    const APICalls = ['answers', 'comments', 'questions', 'users'];

    APICalls.forEach(callData => {
      fetch(`${APIUrl}/${callData}`).then(res => res.json()).then(obj => {
        const data = obj[callData];
        this.setState({ [callData]: data });
      });
    });

    // fetch(`${APIUrl}/users`)
    //   .then(res => res.json())
    //   .then(usersObj => {
    //     const users = usersObj.users;
    //     this.setState({ users });
    //   });

    // fetch(`${APIUrl}/questions`)
    //   .then(res => res.json())
    //   .then(questionsObj => {
    //     const questions = questionsObj.questions;
    //     this.setState({ questions });
    //   });

    // fetch(`${APIUrl}/questions`)
    //   .then(res => res.json())
    //   .then(questionsObj => {
    //     const questions = questionsObj.questions;
    //     this.setState({ questions });
    //   });

    // fetch(`${APIUrl}/questions`)
    //   .then(res => res.json())
    //   .then(questionsObj => {
    //     const questions = questionsObj.questions;
    //     this.setState({ questions });
    //   });
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
      answers,
      comments,
      displayAllQuestions,
      questions,
      questionsDisplayed,
      searchWord,
      sortByHot,
      users
    } = this.state;

    const getUser = question => {
      if (users.length) {
        const currentUser = users.find(
          user => user.userId === question.authorId
        );
        const votingData = {
          downvotes: question.downvotes,
          upvotes: question.upvotes
        };

        return (
          <QuestionCard
            answers={answers}
            authorId={question.authorId}
            comments={comments}
            conversations={question.conversations}
            questionAnswers={question.answers}
            questionComments={question.comments}
            questionText={question.questionText}
            discussions={question.discussions}
            key={question.questionId}
            name={currentUser.firstName}
            peersInvolved={question.peersInvolved}
            question={question.question}
            questionId={question.questionId}
            mainImgSrc={currentUser.imgUrl}
            status={question.status}
            users={users}
            votingData={votingData}
          />
        );
      }
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

    const questionCards = sortedQuestions
      .map(getUser)
      .slice(0, this.state.questionsDisplayed);

    return (
      <AppContainer>
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
        <BodyContainer>
          <ContentContainer>
            {questionCards}
            {sortedQuestions.length > questionsDisplayed &&
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
        </BodyContainer>
      </AppContainer>
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
