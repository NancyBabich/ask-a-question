import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';
import VotingComponent from './VotingComponent';

export default class SecondaryResponseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: 19,
      downvotes: 5,
      haveVoted: false
      //haveDownvoted: false
    };
  }

  handleVote = stateKey => {
    this.setState({
      [stateKey]: this.state[stateKey] + 1,
      haveVoted: true
      //haveDownvoted: [stateKey] === 'downvotes' && true
    });
  };

  render() {
    return (
      <ResponseCardContainer>
        <ProfilePictureContainer>
          <ProfilePicture src="https://media1.popsugar-assets.com/files/thumbor/jTRjxXgxI-nNBHKof7ju_46Paho/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/02/092/n/1922153/e43c9ee6cc77c5e6_razorsquare.jpg" />
        </ProfilePictureContainer>
        <ResponseContainer>
          <ResponseContentContainer>
            <ResponseHeader>
              <Name>Patricia </Name>
              commented it
              <Divider /> <Time> yesterday</Time>
            </ResponseHeader>
            <ResponseContent>
              Numbers or tingling in your feet should be reported to your doctor
              at your regular visits.
            </ResponseContent>
          </ResponseContentContainer>
          <VotingContainer>
            <VotingComponent
              handleVote={this.handleVote}
              votingData={this.state}
            />
          </VotingContainer>
        </ResponseContainer>
      </ResponseCardContainer>
    );
  }
}

const Activity = styled.span`
  text-transform: uppercase;
  color: ${Colors.darkGray};
  font-size: .75rem;
`;

const Divider = styled.div`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${Colors.gray};
  margin: 0 .5rem;
`;

const Name = styled.span`
  color: ${Colors.darkBlue};
  font-weight: 700;
`;

const ResponseCardContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 80%;
  background-color: white;
  margin-top: .1rem;
`;

const ResponseContainer = styled.div`
  display: flex;
  width: 85%;
  padding-left: 1rem;
`;

const ResponseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ResponseHeader = styled.div`
  width: 100%;
  height: 50%;
  padding: 1rem 0 .5rem 0;
`;

const ResponseContent = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.75rem;
  padding: .5rem 0 2rem 0;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  border-right: solid 1px ${Colors.lightGray};
`;

const Time = styled.span`
  font-family: 'Crimson Text';
  font-weight: 700;
  font-style: italic;
`;

const VotingContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
`;
