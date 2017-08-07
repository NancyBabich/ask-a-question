import React from 'react';
import styled from 'styled-components';

import Centered from '../../styled-components/Centered';
import Colors from '../../consts/Colors';
import Container from '../../styled-components/Container';
import VotingComponent from './VotingComponent';

const QuestionContent = ({ handleVote, votingData }) =>
  <InnerContainer>
    <TextContainer>
      All my patients with diabetes should see an ophthalmologist yearly for a
      dialated eye examination- begining at diagnosis inpeople with type 2
      diabetes, and after 5 years in people with type 1 diabetes after puberty.
      Patients with know eye disease, symptoms of blurred vision in one eye, or
      blind spots need to see their ophthalmologist more frequently.
    </TextContainer>
    <VotingSection>
      <VotingComponent votingData={votingData} handleVote={handleVote} />
    </VotingSection>
    <StyledButton>
      <Activity>give </Activity>new answer
    </StyledButton>
  </InnerContainer>;

export default QuestionContent;

const Activity = styled.span`text-transform: uppercase;`;

const InnerContainer = Centered.extend`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: .8em;
  align-items: flex-start;
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

const VotingSection = styled.div`
  display: flex;
  width: 30%;
  padding-top: 1.5rem;
  align-items: center;
  justify-content: center;
`;
