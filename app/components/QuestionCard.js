import React from 'react';
import styled from 'styled-components';

import ActivityCard from './../components/ActivityCard';
import Colors from './../consts/Colors';
import ProfilePicture from './../styled-components/ProfilePicture';

const QuestionCard = ({ mainImgSrc }) => {
  const keys = [1, 2, 3, 4, 5, 6];

  let activityCards = keys.slice(0, 4).map((key, i) => {
    return (
      <ActivityCard
        key={i}
        activity="commented"
        imgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
    );
  });

  return (
    <QuestionCardContainer>
      <PrimaryCard>
        <PrimaryCardHeader>
          <HeaderImageContainer>
            <ProfilePicture src={mainImgSrc} />
          </HeaderImageContainer>
          <TitleContainer>
            <Title>
              <Name>Eva </Name>is asking
            </Title>
            <Question>Will insulin make my patient gain weight?</Question>
          </TitleContainer>
        </PrimaryCardHeader>
        <PrimaryCardBody>
          <QuestionStatusContainer>
            <QuestionStatus>asked</QuestionStatus>
          </QuestionStatusContainer>
          {keys.length <= 5
            ? <SecondaryCard>activityCards</SecondaryCard>
            : <SecondaryCard>
                <RemainingActivitiesCard>
                  <NumberContainer>
                    {keys.length - 4}
                  </NumberContainer>
                  <div>more activities</div>
                </RemainingActivitiesCard>
                {activityCards}
              </SecondaryCard>}
        </PrimaryCardBody>
      </PrimaryCard>
      <StatsContainer>
        <Stats>
          <div>1 related discussion</div>
          <div>6 peers involved</div>
          <div>3 conversations</div>
        </Stats>
      </StatsContainer>
    </QuestionCardContainer>
  );
};

export default QuestionCard;

const SecondaryCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 80%;
`;

const HeaderImageContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 1rem 0 0 1rem;
`;

const PrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 90%;
  width: 80%;
  background-color: ${Colors.lightBlue};
`;

const PrimaryCardBody = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const PrimaryCardHeader = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
`;

const Name = styled.span`
  text-transform: none;
  color: ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;

const Question = styled.div`
  color: ${Colors.darkBlue};
  font-style: italic;
`;

const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 25rem;
  border: solid 1px ${Colors.lightGray};
`;

const RemainingActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 20%;
  margin: .25rem;
  padding: .5rem 0;
  font-size: .5em;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 48%;
  font-size: .75rem;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  height: 90%;
`;

const Title = styled.div`
  color: ${Colors.darkGray};
  text-transform: uppercase;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 80%;
`;

const QuestionStatus = styled.div`
  width: 80%;
  border-top: solid 1px ${Colors.darkGray};
  text-align: center;
`;

const QuestionStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  text-transform: uppercase;
  color: ${Colors.darkGray};
`;
