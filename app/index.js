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
      <QuestionCard mainImgSrc="https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg" />
    </ContentContainer>
    <ContentContainer>
      <QuestionCard mainImgSrc="https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg" />
    </ContentContainer>
  </AppContainer>,
  document.getElementById('app')
);
