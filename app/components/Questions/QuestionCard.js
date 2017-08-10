import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ActivityCards from './ActivityCards';
import Colors from './../../consts/Colors';
import ProfilePicture from './../../styled-components/ProfilePicture';
import QuestionContent from './QuestionContent';
import SecondaryCard from './SecondaryCard';

const QuestionCard = ({
  authorId,
  conversations,
  discussions,
  questionAnswers,
  questionComments,
  handleVote,
  history,
  individualQuestion,
  mainImgSrc,
  name,
  peersInvolved,
  question,
  status,
  votingData
}) => {
  const link = {
    pathname: `/profile/${authorId}`,
    state: { modal: true }
  };

  return (
    <QuestionCardContainer>
      <PrimaryCard individualQuestion={individualQuestion}>
        <PrimaryCardHeader>
          <HeaderImageContainer>
            <Link to={link}>
              <ProfilePicture src={mainImgSrc} />
            </Link>
          </HeaderImageContainer>
          <TitleContainer>
            <Title>
              <Link to={link} style={{ textDecoration: 'none' }}>
                <Name>
                  {name}{' '}
                </Name>
              </Link>is asking
            </Title>
            <Question
              onClick={() => !individualQuestion && history.push('/new')}
              individualQuestion={individualQuestion}
            >
              {question}
              <Unfollow individualQuestion={individualQuestion}>
                unfollow
              </Unfollow>
            </Question>
          </TitleContainer>
        </PrimaryCardHeader>
        <PrimaryCardBody>
          <QuestionStatusContainer>
            {!individualQuestion &&
              <QuestionStatus>
                {status}
              </QuestionStatus>}
          </QuestionStatusContainer>
          <SecondaryCard
            content={
              individualQuestion
                ? <QuestionContent
                    handleVote={handleVote}
                    votingData={votingData}
                  />
                : <ActivityCards
                    questionComments={questionComments}
                    questionAnswers={questionAnswers}
                  />
            }
          />
        </PrimaryCardBody>
      </PrimaryCard>
      <StatsContainer individualQuestion={individualQuestion}>
        <Stats>
          <div>
            {discussions.length} related{' '}
            {discussions.length !== 1 ? 'discussions' : 'discussion'}
          </div>
          <div>
            {peersInvolved.length}{' '}
            {peersInvolved.length !== 1 ? 'peers' : 'peer'} involved
          </div>
          <div>
            {conversations.length}{' '}
            {conversations.length !== 1 ? 'conversations' : 'conversation'}
          </div>
        </Stats>
      </StatsContainer>
      {individualQuestion &&
        <StyledButton>
          <Activity>give </Activity>new answer
        </StyledButton>}
    </QuestionCardContainer>
  );
};

export default withRouter(QuestionCard);

const Activity = styled.span`text-transform: uppercase;`;

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
  position: relative;
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

const StyledButton = styled.div`
  position: absolute;
  width: 150px;
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
