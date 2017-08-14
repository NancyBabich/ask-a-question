import React from 'react';
import styled from 'styled-components';

import NavButton from '../../styled-components/NavButton';

const HowItAllStarted = () =>
  <HowItStartedContainer>
    <NavButton fill left />
    How it all started
    <NavButton fill />
  </HowItStartedContainer>;

export default HowItAllStarted;

const HowItStartedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: 'Crimson Text';
  font-weight: bold;
  font-style: italic;
  font-size: 3em;
  color: black;

  @media screen and (max-width: 555px) {
    font-size: 2rem;
  }
`;
