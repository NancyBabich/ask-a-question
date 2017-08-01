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
        activity={i + 1}
        imgSrc="https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg"
      />
    );
  });

  return (
    <QuestionCardContainer>
      <MainCard>
        <MainCardHeader>
          <HeaderImageContainer>
            <ProfilePicture src={mainImgSrc} />
          </HeaderImageContainer>
          <TitleContainer>
            <div>Eva is asking</div>
            <div>Will insulin make my patient gain weight?</div>
          </TitleContainer>
        </MainCardHeader>
        <MainCardBody>
          <Wtf>hej</Wtf>
          {keys.length <= 5
            ? <ActivityCardsContainer>activityCards</ActivityCardsContainer>
            : <ActivityCardsContainer>
                <RemainingActivitiesCard>
                  <NumberContainer>
                    {keys.length - 4}
                  </NumberContainer>
                  <div>more activities</div>
                </RemainingActivitiesCard>
                {activityCards}
              </ActivityCardsContainer>}
        </MainCardBody>
      </MainCard>
    </QuestionCardContainer>
  );
};

export default QuestionCard;

const ActivityCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 80%;
  height: 100%
  padding: 3rem 0 0 1rem;
`;

const HeaderImageContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 1rem 0 0 1rem;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 80%;
  width: 80%;
  background-color: ${Colors.lightBlue};
`;

const MainCardBody = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const MainCardHeader = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;

const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 25rem;
  margin-top: 10rem;
  border: solid 1px ${Colors.lightGray};
`;

const RemainingActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 20%;
  margin: .25rem;
  padding: .5rem 0;
  font-size: .5em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 80%;
`;

const Wtf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`;
