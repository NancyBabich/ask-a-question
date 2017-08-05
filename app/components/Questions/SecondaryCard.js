import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

const SecondaryCard = ({ content }) =>
  <SecondaryCardContainer>
    {content}
  </SecondaryCardContainer>;
export default SecondaryCard;

const SecondaryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  width: 80%;
`;
