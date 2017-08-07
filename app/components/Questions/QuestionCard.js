import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';

import ActivityCards from './ActivityCards';
import Colors from './../../consts/Colors';
import ProfilePicture from './../../styled-components/ProfilePicture';
import QuestionContent from './QuestionContent';
import SecondaryCard from './SecondaryCard';

const QuestionCard = ({
  handleVote,
  history,
  individualQuestion,
  mainImgSrc,
  votingData
}) =>
  <QuestionCardContainer>
    <PrimaryCard individualQuestion={individualQuestion}>
      <PrimaryCardHeader>
        <HeaderImageContainer>
          <ProfilePicture
            src={mainImgSrc}
            onClick={() => history.push('/profile')}
          />
        </HeaderImageContainer>
        <TitleContainer>
          <Title>
            <Name>Eva </Name>is asking
          </Title>
          <Question
            onClick={() => !individualQuestion && history.push('/new')}
            individualQuestion={individualQuestion}
          >
            Will insulin make my patient gain weight?
            <Unfollow individualQuestion={individualQuestion}>
              unfollow
            </Unfollow>
          </Question>
        </TitleContainer>
      </PrimaryCardHeader>
      <PrimaryCardBody>
        <QuestionStatusContainer>
          {!individualQuestion && <QuestionStatus>asked</QuestionStatus>}
        </QuestionStatusContainer>
        <SecondaryCard
          content={
            individualQuestion
              ? <QuestionContent
                  handleVote={handleVote}
                  votingData={votingData}
                />
              : <ActivityCards />
          }
        />
      </PrimaryCardBody>
    </PrimaryCard>
    <StatsContainer individualQuestion={individualQuestion}>
      <Stats>
        <div>1 related discussion</div>
        <div>6 peers involved</div>
        <div>3 conversations</div>
      </Stats>
    </StatsContainer>
  </QuestionCardContainer>;

export default withRouter(QuestionCard);

const HeaderImageContainer = styled.div`
  display: flex;
  width: 20%;
  padding-top: 1rem;
  justify-content: center;
`;

const PrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: ${ifProp('individualQuestion', '100%', '90%')};
  width: ${ifProp('individualQuestion', '100%', '80%')};
  background-color: ${Colors.lightBlue};
`;

const PrimaryCardBody = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const PrimaryCardHeader = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
`;

const Name = styled.span`
  text-transform: none;
  color: ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
  font-size: 1rem;
`;

const Question = styled.div`
  display: flex;
  width: 100%;
  margin-top: .5rem;
  justify-content: space-between;
  color: ${Colors.darkBlue};
  font-family: 'Crimson Text';
  font-size: 1.25rem;
  font-weight: 700;
  font-style: italic;
  &:hover {
    cursor: ${ifProp('individualQuestion', 'auto', 'pointer')};
  }
`;

const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 20rem;
  border-bottom: solid 1px ${Colors.lightGray};
  background-color: white;
`;

const QuestionStatus = styled.div`
  width: 75%;
  border-top: solid 2px ${Colors.darkGray};
  padding: .5rem 0;
  text-align: center;
  font-size: .75rem;
`;

const QuestionStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  text-transform: uppercase;
  color: ${Colors.darkGray};
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 48%;
  font-family: 'Crimson Text';
  font-size: .9rem;
  font-style: italic;
  font-weight: 700;
`;

const StatsContainer = styled.div`
  display: ${ifProp('individualQuestion', 'none', 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  height: 90%;
`;

const Title = styled.div`
  color: ${Colors.darkGray};
  text-transform: uppercase;
  font-size: .75rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 80%;
`;

const Unfollow = styled.div`
  display: ${ifProp('individualQuestion', 'flex', 'none')};
  padding: 0 4rem;
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
  font-family: 'Roboto Condensed';
  font-size: 1rem;
`;
