/* @flow */
import styled from 'styled-components';

import Breakpoints from '../consts/Breakpoints';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 60%;
  margin: 9.4rem auto 0 auto;
  background: none;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 100%;
  }
`;

export default ContentContainer;
