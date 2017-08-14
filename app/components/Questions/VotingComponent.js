import React from 'react';
import styled from 'styled-components';

import VotingButton from './VotingButton';

const VotingComponent = ({ handleVote, votingData }) => {
  const handleVoteClick = stateKey => {
    handleVote(stateKey);
  };

  return (
    <VotingComponentContainer>
      <div>
        {votingData.upvotes >= votingData.downvotes ||
        (votingData.haveVoted && !votingData.haveDownvoted)
          ? <Votes>
              <Number>{votingData.upvotes}</Number>{' '}
              {votingData.upvotes !== 1 ? 'upvotes' : 'upvote'}
            </Votes>
          : <Votes>
              <Number>{votingData.downvotes}</Number>{' '}
              {votingData.downvotes !== 1 ? 'downvotes' : 'downvote'}
            </Votes>}
      </div>
      <div>
        <VotingArrowContainer>
          <VotingButton
            handleVote={() =>
              !votingData.haveVoted && handleVoteClick('upvotes')}
          />
        </VotingArrowContainer>
        <VotingArrowContainer>
          <VotingButton
            down
            handleVote={() =>
              !votingData.haveVoted && handleVoteClick('downvotes')}
          />
        </VotingArrowContainer>
      </div>
    </VotingComponentContainer>
  );
};

export default VotingComponent;

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
