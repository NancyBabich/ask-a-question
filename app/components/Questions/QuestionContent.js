import React from 'react';
import styled from 'styled-components';

import VotingComponent from './VotingComponent';

const QuestionContent = ({ handleVote, questionText, votingData }) =>
  <InnerContainer>
    <TextContainer>
      {questionText}
    </TextContainer>
    <VotingContainer>
      <VotingComponent votingData={votingData} handleVote={handleVote} />
    </VotingContainer>
  </InnerContainer>;

export default QuestionContent;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: .8em;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
  height: 100%;
  line-height: 1.5;
  padding: 1.5rem 1rem 0 1rem;
`;

const VotingContainer = styled.div`
  display: flex;
  width: 30%;
  padding-top: 1.5rem;
  align-items: center;
  justify-content: center;
`;
