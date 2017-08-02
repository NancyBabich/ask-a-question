import React from 'react';
import styled from 'styled-components';

import Colors from '../consts/Colors';

const AppContainer = ({ children }) =>
  <PrimaryContainer>
    <SecondaryContainer>
      {children}
    </SecondaryContainer>
  </PrimaryContainer>;

const PrimaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${Colors.orange};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 90%;
  background-color: ${Colors.lightGray};
  align-items: center;
  justify-content: ;
`;

export default AppContainer;
