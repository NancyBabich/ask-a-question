import React from 'react';

import AppContainer from './AppContainer';
import ContentContainer from '../styled-components/ContentContainer';
import DisplaySettings from './DisplaySettings';
import Header from './Header';
import QuestionCard from './QuestionCard';

const App = () =>
  <AppContainer>
    <Header rightComponent={<DisplaySettings searchBar />} />
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
    <ContentContainer>
      <QuestionCard mainImgSrc="https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg" />
    </ContentContainer>
  </AppContainer>;

export default App;
