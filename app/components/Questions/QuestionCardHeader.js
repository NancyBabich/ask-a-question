import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import Breakpoints from '../../consts/breakpoints';
import Colors from '../../consts/colors';
import ProfilePicture from '../styled-components/ProfilePicture';

class QuestionCardHeader extends Component {
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
      individualQuestion,
      mainImgSrc,
      name,
      question
    } = this.props;

    const link = {
      pathname: `/profile/${authorId}`,
      state: { modal: true }
    };

    return (
      <Container>
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
                !individualQuestion && history.push(`/question/${questionId}`)}
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
      </Container>
    );
  }
}

export default withRouter(QuestionCardHeader);

const Container = styled.div`
  display: flex;
  height: 40%;
  width: ${ifProp('individualQuestion', '100%', '80%')};
  background-color: ${Colors.lightBlue};

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }
`;

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

const QuestionDescription = styled.div`
  @media screen and (max-width: 360px) {
    padding-left: 1rem;
  }
`;

const Unfollow = styled.div`
  display: ${ifProp('individualQuestion', 'flex', 'none')};
  padding: 0 4rem;
  font-family: 'Roboto Condensed';
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
  font-size: 1rem;
`;
