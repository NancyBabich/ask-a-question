import React, { Component } from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/colors';
import { answers, comments, users } from '../../data/data';

export default class ActivityCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsNumber: 4
    };

    this.mobileViewport = window.matchMedia(
      `screen and (max-width: ${Breakpoints.tablet})`
    );
  }

  componentDidMount() {
    this.mobileViewport.addListener(this.onResize);
    this.onResize(this.mobileViewport);
  }

  onResize = mq => {
    const cardsNumber = mq.matches ? 1 : 4;
    this.setState({
      cardsNumber
    });
  };

  componentWillUnmount() {
    this.mobileViewport.removeListener(this.onResize);
  }

  render() {
    const { cardsNumber } = this.state;
    const { questionAnswers, questionComments } = this.props;
    const allActivitiesNumber =
      questionAnswers.length + questionComments.length;
    const commentsToDisplayIds = questionComments.slice(
      0,
      cardsNumber === 1 && questionAnswers.length
        ? 0
        : cardsNumber - questionAnswers.length
    );

    const commentsToDisplay = commentsToDisplayIds.map(commentToDisplayId =>
      comments.find(comment => comment.commentId === commentToDisplayId)
    );
    const answersToDisplay = questionAnswers
      .map(questionAnswer =>
        answers.find(answer => answer.answerId === questionAnswer)
      )
      .slice(
        0,
        this.state.cardsNumber >= questionAnswers.length
          ? questionAnswers.length
          : this.state.cardsNumber
      );
    const activitiesToDisplay = commentsToDisplay.concat(answersToDisplay);

    const getActivity = (activityToDisplay, i) => {
      const isComment = i < commentsToDisplayIds.length;
      const author = users.find(
        user => user.userId === activityToDisplay.authorId
      );

      return (
        <ActivityCard
          activity={isComment ? 'commented' : 'answered'}
          authorId={author.userId}
          isAnswer={!isComment}
          key={i}
          imgSrc={author.imgUrl}
        />
      );
    };

    const activityCards = activitiesToDisplay.map(getActivity);

    return cardsNumber >= questionComments.length
      ? <StyledDiv>
          {activityCards}
        </StyledDiv>
      : <StyledDiv>
          <RemainingActivitiesCard>
            <NumberContainer>
              {allActivitiesNumber - cardsNumber}
            </NumberContainer>
            <TextContainer>
              more{' '}
              {allActivitiesNumber - cardsNumber === 1
                ? 'activity'
                : 'activities'}
            </TextContainer>
            <Dot />
          </RemainingActivitiesCard>
          {activityCards}
        </StyledDiv>;
  }
}

const Dot = styled.div`
  position: absolute;
  bottom: -.3rem;
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  background-color: ${Colors.darkGray};

  @media screen and (max-width: 555px) {
    display: block;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1rem;

  @media screen and (max-width: 555px) {
    margin-top: .25rem;
  }
`;

const RemainingActivitiesCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 20%;
  margin: .25rem;
  padding: .5rem 0;
  font-size: .5em;

  @media screen and (max-width: 555px) {
    background-color: ${Colors.lightGray};
    height: 99%;
    width: 50%;
    padding: 0;
    margin: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  @media screen and (max-width: 555px) {
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  font-family: 'Crimson Text';
  font-size: 1rem;
  font-weight: 700;
  font-style: italic;
  text-align: center;

  @media screen and (max-width: 555px) {
    padding-bottom: .5rem;
  }
`;
