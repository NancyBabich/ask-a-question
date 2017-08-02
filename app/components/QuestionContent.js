import React from 'react';
import styled from 'styled-components';

import Container from '../styled-components/Container';

const QuestionContent = () => <QuestionContainer>test</QuestionContainer>;

export default QuestionContent;

const QuestionContainer = Container.extend`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
