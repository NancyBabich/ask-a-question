import React from 'react';

import AppContainer from './AppContainer';
import ContentContainer from '../styled-components/ContentContainer';
import FilterSortSearch from './FilterSortSearch';
import Header from './Header';
import QuestionCard from './QuestionCard';

const Questions = () =>
  <div>
    <Header searchBar rightComponent={<FilterSortSearch />} />
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
  </div>;

export default Questions;
