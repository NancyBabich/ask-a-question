import React, { Component } from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import { answers, comments, users } from '../../data/data';

export default class ActivityCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsNumber: 4
    };

    this.mobileViewport = window.matchMedia('screen and (max-width: 480px)');
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
    const commentsToDiplayIds = questionComments.slice(
      0,
      cardsNumber - questionAnswers.length
    );

    const commentsToDiplay = commentsToDiplayIds.map(commentToDiplayId =>
      comments.find(comment => comment.commentId === commentToDiplayId)
    );
    const answersToDisplay = questionAnswers.map(questionAnswer =>
      answers.find(answer => answer.answerId === questionAnswer)
    );
    const activitiesToDisplay = commentsToDiplay.concat(answersToDisplay);

    const getActivity = (activityToDisplay, i) => {
      const isComment = i < commentsToDiplayIds.length;
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
              {questionComments.length - cardsNumber}
            </NumberContainer>
            <TextContainer>
              more{' '}
              {questionComments.length - cardsNumber === 1
                ? 'activity'
                : 'activities'}
            </TextContainer>
          </RemainingActivitiesCard>
          {activityCards}
        </StyledDiv>;
  }
}

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1rem;
`;

const RemainingActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 20%;
  margin: .25rem;
  padding: .5rem 0;
  font-size: .5em;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  font-family: 'Crimson Text';
  font-size: 1rem;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`;
