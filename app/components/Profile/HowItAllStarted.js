import React from 'react';
import styled from 'styled-components';

import NavButton from '../../styled-components/NavButton';
import ProfilePicture from '../../styled-components/ProfilePicture';

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
  font-family: 'Crimson Text';
  font-weight: bold;
  font-style: italic;
  font-size: 3em;
  color: black;
  margin-top: 7rem;
`;
