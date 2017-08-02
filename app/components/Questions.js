import React from 'react';

import AppContainer from './AppContainer';
import ContentContainer from '../styled-components/ContentContainer';
import FilterSortSearch from './FilterSortSearch';
import Header from './Header';
import QuestionCard from './QuestionCard';

const Questions = () => {
  const questions = [
    {
      questionId: 1,
      keywords: ['diabetes', 'insulin'],
      authorFirstName: 'Eva',
      authorLastName: 'Kosofsky',
      relatedDiscussions: 3,
      peersInvolved: 6,
      conversations: 3,
      question: 'Will insulin make my patient gain weight?',
      comments: [],
      answers: [],
      status: 'asked',
      dateAsked: '2017-08-02'
    },
    {},
    {},
    {}
  ];

  const user = {
    firstName: 'Eva',
    lastName: 'Smith',
    dateJoined: '2015-10-03',
    questionIds: [1, 2, 3]
  };

  return (
    <AppContainer>
      <Header searchBar rightComponent={<FilterSortSearch />} />
      <ContentContainer>
        <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
        <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
      </ContentContainer>
    </AppContainer>
  );
};

export default Questions;
