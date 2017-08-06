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
          <div>
            {this.state.upvotes >= this.state.downvotes &&
            this.state.haveDownvoted === false
              ? <Votes>
                  <Number>{this.state.upvotes}</Number> upvotes
                </Votes>
              : <Votes>
                  <Number>{this.state.downvotes}</Number> downvotes
                </Votes>}
          </div>
          <div>
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
          </div>
        </VotesContainer>
        <StyledButton>
          <Activity>give </Activity>new answer
        </StyledButton>
      </InnerContainer>
    );
  }
}

const Activity = styled.span`text-transform: uppercase;`;

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
  position: relative;
  width: 100%;
  height: 100%;
  font-size: .8em;
  align-items: flex-start;
`;

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
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

const TextContainer = Container.extend`
  width: 70%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 1.5;
  padding-top: 1.5rem;
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

const Votes = styled.span`
  font-family: 'Crimson Text';
  font-weight: 700;
  font-style: italic;
  vertical-align: middle;
`;

const VotesContainer = styled.div`
  display: flex;
  width: 30%;
  padding-top: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const VotingArrowContainer = styled.div`padding: .5rem;`;
