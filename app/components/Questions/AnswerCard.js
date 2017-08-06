import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/Colors';
import ProfilePicture from '../../styled-components/ProfilePicture';

const AnswerCard = () =>
  <AnswerContainer>
    <ProfilePictureContainer>
      <ProfilePicture src="https://media1.popsugar-assets.com/files/thumbor/jTRjxXgxI-nNBHKof7ju_46Paho/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/02/092/n/1922153/e43c9ee6cc77c5e6_razorsquare.jpg" />
    </ProfilePictureContainer>
    <AnswerContainer>
        <AnswerContentContainer>
        </AnswerContentContainer>
    </AnswerContainer>
  </AnswerContainer>;

export default AnswerCard;

const AnswerContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  border: solid 1px ${Colors.gray};
`;

const AnswerContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
`;


const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  border-right: solid 1px ${Colors.gray};
`;
