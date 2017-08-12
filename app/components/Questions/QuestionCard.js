import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ActivityCards from './ActivityCards';
import Breakpoints from '../../consts/breakpoints';
import Colors from './../../consts/colors';
import ProfilePicture from './../../styled-components/ProfilePicture';
import QuestionContent from './QuestionContent';
import SecondaryCard from './SecondaryCard';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: this.props.isOnShelf
    };
  }

  toggleFollow = () => {
    this.setState({
      isFollowed: !this.state.isFollowed
    });
  };

  render() {
    const {
      authorId,
      conversations,
      discussions,
      questionAnswers,
      questionComments,
      questionId,
      handleVote,
      history,
      individualQuestion,
      isOnShelf,
      mainImgSrc,
      name,
      peersInvolved,
      question,
      questionText,
      status,
      votingData
    } = this.props;

    const link = {
      pathname: `/profile/${authorId}`,
      state: { modal: true }
    };

    return (
      <QuestionCardContainer individualQuestion={individualQuestion}>
        <QuestionCardHeader individualQuestion={individualQuestion}>
          <ImageContainer>
            <Link to={link}>
              <ProfilePicture src={mainImgSrc} />
            </Link>
          </ImageContainer>
          <HeaderContentContainer>
            <QuestionDescription>
              <Link to={link} style={{ textDecoration: 'none' }}>
                <Name>
                  {name}{' '}
                </Name>
              </Link>is asking
            </QuestionDescription>
            <div>
              <Question
                individualQuestion={individualQuestion}
                onClick={() =>
                  !individualQuestion &&
                  history.push(`/question/${questionId}`)}
              >
                {question}
                <Unfollow
                  individualQuestion={individualQuestion}
                  onClick={this.toggleFollow}
                >
                  {this.state.isFollowed ? 'unfollow' : 'follow'}
                </Unfollow>
              </Question>
            </div>
          </HeaderContentContainer>
        </QuestionCardHeader>
        <QuestionCardBody>
          <QuestionCardsContainer individualQuestion={individualQuestion}>
            <QuestionStatusCard>
              {!individualQuestion &&
                <QuestionStatus>
                  {status}
                </QuestionStatus>}
            </QuestionStatusCard>
            <SecondaryCard
              content={
                individualQuestion
                  ? <QuestionContent
                      handleVote={handleVote}
                      votingData={votingData}
                      questionText={questionText}
                    />
                  : <ActivityCards
                      questionComments={questionComments}
                      questionAnswers={questionAnswers}
                    />
              }
            />
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
                  {conversations.length !== 1
                    ? 'conversations'
                    : 'conversation'}
                </div>
              </Stats>
            </StatsContainer>}
        </QuestionCardBody>
      </QuestionCardContainer>
    );
  }
}

export default withRouter(QuestionCard);

const Activity = styled.span`text-transform: uppercase;`;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 85%;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 15%;
  padding-top: 1rem;
  justify-content: center;
`;

const Name = styled.span`
  text-transform: none;
  color: ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
  font-size: 1rem;
`;

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
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

  @media screen and (max-width: 360px) {
    padding-left: 1rem;
  }
`;

const QuestionCardBody = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const QuestionCardsContainer = styled.div`
  height: 100%;
  width: ${ifProp('individualQuestion', '100%', '80%')};
  display: flex;

  @media screen and (max-width: 555px) {
    width: ${ifProp('individualQuestion', '100%', '60%')};
  }
`;

const QuestionCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 23rem;
  border-bottom: solid 1px ${Colors.lightGray};
  background-color: white;
  padding-bottom: ${ifProp('individualQuestion', '0', '3rem')};
  margin-top: 1px;
  box-shadow: 4px 0px 5px 0px rgba(50, 50, 50, 0.47);
`;

const QuestionCardHeader = styled.div`
  display: flex;
  height: 40%;
  width: ${ifProp('individualQuestion', '100%', '80%')};
  background-color: ${Colors.lightBlue};

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }
`;

const QuestionDescription = styled.div`
  @media screen and (max-width: 360px) {
    padding-left: 1rem;
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

const QuestionStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  text-transform: uppercase;
  color: ${Colors.darkGray};
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

const Unfollow = styled.div`
  display: ${ifProp('individualQuestion', 'flex', 'none')};
  padding: 0 4rem;
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
  font-size: 1rem;
`;
