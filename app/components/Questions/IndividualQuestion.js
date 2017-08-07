import React, { Component } from 'react';
import styled from 'styled-components';

import ResponseCard from './ResponseCard';
import AppContainer from './../AppContainer';
import ContentContainer from '../../styled-components/ContentContainer';
import Header from './Header';
import QuestionCard from './QuestionCard';

export default class IndividualQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: 19,
      downvotes: 5,
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
    return (
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
            handleVote={this.handleVote}
            votingData={this.state}
          />
          <ResponseCard />
        </ContentContainer>
      </AppContainer>
    );
  }
}

const QuestionStatusContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-style: italic;
`;
