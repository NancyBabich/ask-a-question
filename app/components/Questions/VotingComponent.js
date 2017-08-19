import React, { Component } from 'react';
import styled from 'styled-components';

import VotingButton from './VotingButton';

export default class VotingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downvotes: this.props.downvotes,
      haveDownvoted: false,
      haveVoted: false,
      upvotes: this.props.upvotes
    };
  }

  handleVote = stateKey => {
    this.setState({
      [stateKey]: this.state[stateKey] + 1,
      haveVoted: true,
      haveDownvoted: stateKey === 'downvotes' ? true : false
    });
  };

  render() {
    return (
      <VotingComponentContainer>
        <div>
          {(!this.state.haveVoted &&
            this.state.upvotes >= this.state.downvotes) ||
          (this.state.haveVoted && !this.state.haveDownvoted)
            ? <Votes>
                <Number>{this.state.upvotes}</Number>{' '}
                {this.state.upvotes !== 1 ? 'upvotes' : 'upvote'}
              </Votes>
            : <Votes>
                <Number>{this.state.downvotes}</Number>{' '}
                {this.state.downvotes !== 1 ? 'downvotes' : 'downvote'}
              </Votes>}
        </div>
        <div>
          <VotingArrowContainer>
            <VotingButton
              handleVote={() =>
                !this.state.haveVoted && this.handleVote('upvotes')}
            />
          </VotingArrowContainer>
          <VotingArrowContainer>
            <VotingButton
              down
              handleVote={() =>
                !this.state.haveVoted && this.handleVote('downvotes')}
            />
          </VotingArrowContainer>
        </div>
      </VotingComponentContainer>
    );
  }
}

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
`;

const Votes = styled.span`
  font-family: 'Crimson Text';
  font-weight: 700;
  font-style: italic;
  vertical-align: middle;
  font-size: .75rem;
`;

const VotingArrowContainer = styled.div`padding: .5rem;`;

const VotingComponentContainer = styled.div`
  display: flex;
  align-items: center;
`;
