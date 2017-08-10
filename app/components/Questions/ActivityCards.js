import React, { Component } from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import { comments, users } from '../../data/data';

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

  // getActivityCards = () =>

  //   this.props.comments.slice(0, this.state.cardsNumber - 1)

  //       <ActivityCard
  //         key={i}
  //         activity="commented"
  //         imgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
  //       />
  //     );

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
    //const activityCards = this.getActivityCards();

    const { cardsNumber } = this.state;
    const { questionComments } = this.props;
    const commentsToDiplay = questionComments.slice(0, cardsNumber);

    const getComment = commentToDiplay => {
      const currentComment = comments.find(
        comment => comment.commentId === commentToDiplay
      );

      const commentAuthor = users.find(
        user => user.userId === currentComment.authorId
      );

      return (
        <ActivityCard
          activity="commented"
          key={currentComment.commentId}
          imgSrc={commentAuthor.imgUrl}
        />
      );
    };

    const activityCards = commentsToDiplay.map(getComment);

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

    //const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //const {activityCards} = this.props;

    // let activityCards = keys.slice(0, 4).map((key, i) => {
    //   return (
    //     <ActivityCard
    //       key={i}
    //       activity="commented"
    //       imgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
    //     />
    //   );
    // });

    //console.log(this.props.comments.legth);

    // return this.state.cardsNumber >= this.props.comments.length
    //   ? <StyledDiv>
    //       {activityCards}
    //     </StyledDiv>
    //   : <StyledDiv>
    //       <RemainingActivitiesCard>
    //         <NumberContainer>
    //           {this.props.comments.length - this.state.cardsNumber}
    //         </NumberContainer>
    //         <TextContainer>
    //           more{' '}
    //           {this.props.comments.length - this.state.cardsNumber === 1
    //             ? 'activity'
    //             : 'activities'}
    //         </TextContainer>
    //       </RemainingActivitiesCard>
    //       {activityCards}
    //     </StyledDiv>; //:
    //
  }
}

//export default ActivityCards;

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
