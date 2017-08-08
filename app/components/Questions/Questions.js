import React from 'react';

import AppContainer from './../AppContainer';
import ContentContainer from '../../styled-components/ContentContainer';
import { loggedUser, questions, users } from '../../data/data';
import FilterSort from './FilterSort';
import Header from './Header';
import QuestionCard from './QuestionCard';

const Questions = () => {
  const findAuthorFirstName = question => {
    let authorFirstName = users.find(user => user.userId === question.authorId)
      .firstName;

    return (
      <QuestionCard
        key={question.questionId}
        name={authorFirstName}
        question={question.question}
        mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
      />
    );
  };

  {
    /*let questionCards = questions.map((question) =>
    

    <QuestionCard
      key={question.questionId}
      name={name}
      question={question.question}
      mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg"
    />)
  ;*/
  }

  let questionCards = questions.map(findAuthorFirstName);

  return (
    <AppContainer>
      <Header searchBar rightComponent={<FilterSort />} />
      <ContentContainer>
        {/*<QuestionCard mainImgSrc={users[1].imgUrl} />
        <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />*/}
        {questionCards}
      </ContentContainer>
    </AppContainer>
  );
};

export default Questions;
