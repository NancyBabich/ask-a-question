import React from 'react';
import styled from 'styled-components';

import Container from '../styled-components/Container';

const QuestionContent = () =>
  <QuestionContainer>
    All my patients with diabetes should see an ophthalmologist yearly for a
    dialated eye examination- begining at diagnosis inpeople with type 2
    diabetes, and after 5 years in people with type 1 diabetes after puberty.
    Patients with know eye disease, symptoms of blurred vision in one eye, or
    blind spots need to see their ophthalmologist more frequently.
  </QuestionContainer>;

export default QuestionContent;

const QuestionContainer = Container.extend`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.25;
  padding: 1rem;
`;
