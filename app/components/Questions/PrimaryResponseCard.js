import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';
import VotingComponent from './VotingComponent';

export default class PrimaryResponseCard extends Component {
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
              <Activity>commented it </Activity>
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
  width: 100%;
  height: 5rem;
  lfkdvjlkdjflborder: solid 1px ${Colors.gray};
  background-color: white;
  margin-top: 2rem;
`;

const ResponseContainer = styled.div`
  display: flex;
  width: 80%;
`;

const ResponseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const ResponseHeader = styled.div`
  width: 100%;
  height: 50%;
`;

const ResponseContent = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.75rem;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-right: solid 1px ${Colors.gray};
`;

const Time = styled.span`
  font-family: 'Crimson Text';
  font-weight: 700;
  font-style: italic;
`;

const VotingContainer = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  justify-content: center;
`;

// display: flex;
//   width: 30%;
//   padding-top: 1.5rem;
//   align-items: center;
//   justify-content: center;
