import React, { Component } from 'react';
import styled from 'styled-components';

import Centered from '../../styled-components/Centered';
import Colors from '../../consts/Colors';
import Container from '../../styled-components/Container';

export default class QuestionContent extends Component {
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
      haveVoted: true
    });
  };

  render() {
    return (
      <InnerContainer>
        <TextContainer>
          All my patients with diabetes should see an ophthalmologist yearly for
          a dialated eye examination- begining at diagnosis inpeople with type 2
          diabetes, and after 5 years in people with type 1 diabetes after
          puberty. Patients with know eye disease, symptoms of blurred vision in
          one eye, or blind spots need to see their ophthalmologist more
          frequently.
        </TextContainer>
        <VotesContainer>
          <StatsContainer>
            {this.state.upvotes >= this.state.downvotes &&
            this.state.haveDownvoted === false
              ? `${this.state.upvotes} upvotes`
              : `${this.state.downvotes} downvotes`}
          </StatsContainer>
          <VotingButtons>
            <VotingArrowContainer>
              <Upvote
                onClick={() =>
                  this.state.haveVoted === false && this.handleVote('upvotes')}
              />
            </VotingArrowContainer>
            <VotingArrowContainer>
              <Downvote
                onClick={() =>
                  this.state.haveVoted === false &&
                  (
                    this.handleVote('downvotes'),
                    this.setState({ haveDownvoted: true })
                  )}
              />
            </VotingArrowContainer>
          </VotingButtons>
        </VotesContainer>
      </InnerContainer>
    );
  }
}

const Downvote = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
`;

const InnerContainer = Centered.extend`
  width: 100%;
  height: 100%;
  font-size: .8em;
`;

const StatsContainer = Centered.extend`padding-top: 3rem;`;

const TextContainer = Container.extend`
  width: 70%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 1.5;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 3rem;
`;

const Upvote = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
`;

const VotesContainer = Centered.extend`
  width: 30%;
  height: 100%;
  align-items: flex-start;
  padding-top: 3rem;
`;

const VotingArrowContainer = styled.div`padding: .5rem;`;

const VotingButtons = Container.extend`padding-top: 3rem;`;
