import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';

const VotingComponent = ({ handleVote, votingData }) => {
  const handleVoteClick = stateKey => {
    handleVote(stateKey);
  };

  return (
    <div>
      <div>
        {votingData.upvotes >= votingData.downvotes &&
        votingData.haveDownvoted === false
          ? <Votes>
              <Number>{votingData.upvotes}</Number> upvotes
            </Votes>
          : <Votes>
              <Number>{votingData.downvotes}</Number> downvotes
            </Votes>}
      </div>
      <div>
        <VotingArrowContainer>
          <Upvote
            onClick={() =>
              votingData.haveVoted === false && handleVoteClick('upvotes')}
          />
        </VotingArrowContainer>
        <VotingArrowContainer>
          <Downvote
            onClick={() =>
              votingData.haveVoted === false && handleVoteClick('downvotes')}
          />
        </VotingArrowContainer>
      </div>
    </div>
  );
};

export default VotingComponent;

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

const Number = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
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

const VotingArrowContainer = styled.div`padding: .5rem;`;
