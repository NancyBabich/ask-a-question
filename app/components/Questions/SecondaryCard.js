import React from 'react';
import styled from 'styled-components';

import Breakpoints from '../../consts/breakpoints';

const SecondaryCard = ({ content }) =>
  <SecondaryCardContainer individualQuestion>
    {content}
  </SecondaryCardContainer>;
export default SecondaryCard;

const SecondaryCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 85%;
  height: 100%;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    justify-content: center;
  }

  @media screen and (max-width: 555px) {
    width: 100%;
  }
`;
