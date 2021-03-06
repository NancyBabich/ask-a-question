import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';
import ProfilePicture from '../styled-components/ProfilePicture';
import VotingComponent from './VotingComponent';

const ResponseCard = ({
  authorFirstName,
  authorId,
  authorPicUrl,
  dateAdded,
  downvotes,
  secondary,
  text,
  upvotes
}) => {
  const link = {
    pathname: `/profile/${authorId}`,
    state: { modal: true }
  };

  return (
    <ResponseCardContainer secondary={secondary}>
      <ProfilePictureContainer secondary={secondary}>
        <Link to={link}>
          <ProfilePicture src={authorPicUrl} />
        </Link>
      </ProfilePictureContainer>
      <ResponseContainer secondary={secondary}>
        <ResponseContentContainer secondary={secondary}>
          <ResponseHeader>
            <Link to={link} style={{ textDecoration: 'none' }}>
              <Name>
                {authorFirstName}{' '}
              </Name>
            </Link>
            <Activity>commented it </Activity>
            <Divider /> <Time> {moment(dateAdded).fromNow()}</Time>
          </ResponseHeader>
          <ResponseContent>
            {text}
          </ResponseContent>
        </ResponseContentContainer>
        <VotingContainer secondary={secondary}>
          <VotingComponent downvotes={downvotes} upvotes={upvotes} />
        </VotingContainer>
      </ResponseContainer>
    </ResponseCardContainer>
  );
};

export default withRouter(ResponseCard);

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
  width: ${ifProp('secondary', '80%', '100%')};
  background-color: white;
  margin-top: ${ifProp('secondary', '.1rem', '2.5rem')};
  box-shadow: 4px 0px 5px 0px rgba(50, 50, 50, 0.47);
`;

const ResponseContainer = styled.div`
  display: flex;
  width: ${ifProp('secondary', '85%', '80%')};
  padding-left: 1rem;
`;

const ResponseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${ifProp('secondary', '70%', '75%')};
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
  width: ${ifProp('secondary', '15%', '20%')};
  border-right: solid 1px ${Colors.lightGray};
`;

const Time = styled.span`
  font-family: 'Crimson Text';
  font-weight: 700;
  font-style: italic;
`;

const VotingContainer = styled.div`
  display: flex;
  width: ${ifProp('secondary', '30%', '25%')};
  align-items: center;
  justify-content: center;
`;
