import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer';
import ContentContainer from './styled-components/ContentContainer';
import DisplaySettings from './components/DisplaySettings';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';

ReactDOM.render(
  <AppContainer>
    <Header rightComponent={<DisplaySettings searchBar />} />
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
  </AppContainer>,
  document.getElementById('app')
);
