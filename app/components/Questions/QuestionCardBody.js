import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import ActivityCards from './ActivityCards';
import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/colors';
import QuestionContent from './QuestionContent';

const QuestionCardBody = ({
  conversations,
  discussions,
  handleVote,
  individualQuestion,
  peersInvolved,
  questionAnswers,
  questionComments,
  questionText,
  status,
  votingData
}) =>
  <Container>
    <QuestionCardsContainer individualQuestion={individualQuestion}>
      <QuestionStatusCard>
        {!individualQuestion &&
          <QuestionStatus>
            {status}
          </QuestionStatus>}
      </QuestionStatusCard>
      <MainCard>
        {individualQuestion
          ? <QuestionContent
              handleVote={handleVote}
              votingData={votingData}
              questionText={questionText}
            />
          : <ActivityCards
              questionComments={questionComments}
              questionAnswers={questionAnswers}
            />}
      </MainCard>
    </QuestionCardsContainer>
    {!individualQuestion &&
      <StatsContainer individualQuestion={individualQuestion}>
        <Stats>
          <div>
            <Number>{discussions.length}</Number> related{' '}
            {discussions.length !== 1 ? 'discussions' : 'discussion'}
          </div>
          <div>
            <Number>{peersInvolved.length}</Number>{' '}
            {peersInvolved.length !== 1 ? 'peers' : 'peer'} involved
          </div>
          <div>
            <Number>{conversations.length}</Number>{' '}
            {conversations.length !== 1 ? 'conversations' : 'conversation'}
          </div>
        </Stats>
      </StatsContainer>}
  </Container>;

export default QuestionCardBody;

const Container = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const MainCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 85%;
  height: 100%;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    justify-content: center;
  }

  @media screen and (max-width: 555px) {
    width: 100%;
  }
`;

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
`;

const QuestionCardsContainer = styled.div`
  height: 100%;
  width: ${ifProp('individualQuestion', '100%', '80%')};
  display: flex;

  @media screen and (max-width: 555px) {
    width: ${ifProp('individualQuestion', '100%', '60%')};
  }
`;

const QuestionStatus = styled.div`
  width: 75%;
  border-top: solid 1px ${Colors.darkGray};
  text-align: center;
  font-size: .75rem;
  padding-bottom: .5rem;
  padding-top: .25rem;
`;

const QuestionStatusCard = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 15%;
  height: 100%;
  background-color: ${Colors.lightBlue};
  font-size: .75rem;
  text-transform: uppercase;

  @media screen and (max-width: 555px) {
    display: none;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  font-family: 'Crimson Text';
  font-size: .9rem;
  font-style: italic;
  font-weight: 700;

  @media screen and (max-width: 290px) {
    font-size: .75rem;
  }

  @media screen and (max-width: 250px) {
    font-size: .7rem;
  }
`;

const StatsContainer = styled.div`
  display: ${ifProp('individualQuestion', 'none', 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  height: 100%;

  @media screen and (max-width: 555px) {
    width: 40%;
    justify-content: center;
  }
`;
