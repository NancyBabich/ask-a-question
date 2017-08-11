import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import Breakpoints from '../../consts/breakpoints';

const SecondaryCard = ({ content }) =>
  <SecondaryCardContainer>
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
`;
