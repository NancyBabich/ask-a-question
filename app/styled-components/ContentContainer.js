import styled from 'styled-components';

import Breakpoints from '../consts/breakpoints';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 65%;
  margin: 10rem auto;
  background: none;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    margin: 14rem auto;
  }

  @media screen and (max-width: 650px) {
    margin: 14rem auto;
  }

  @media screen and (max-width: 550px) {
    margin: 17rem auto;
  }

  @media screen and (max-width: 415px) {
    margin: 22rem auto;
  }
`;

export default ContentContainer;
