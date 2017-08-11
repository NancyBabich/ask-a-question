import React from 'react';
import styled from 'styled-components';

import Breakpoints from '../consts/breakpoints';
import Colors from '../consts/Colors';

const BodyContainer = ({ children }) =>
  <PrimaryContainer>
    <SecondaryContainer>
      {children}
    </SecondaryContainer>
  </PrimaryContainer>;

const PrimaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.orange};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 90%;
  background-color: ${Colors.lightGray};
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }
`;

export default BodyContainer;
