import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Breakpoints from '../../consts/breakpoints';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 65%;
  margin: ${ifProp('singleQuestion', '7rem auto', '10rem auto')};
  background: none;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    margin: ${ifProp('singleQuestion', '7rem auto', '14rem auto')};
  }

  @media screen and (max-width: 550px) {
    margin: ${ifProp('singleQuestion', '7rem auto', '17rem auto')};
  }

  @media screen and (max-width: 415px) {
    margin: ${ifProp('singleQuestion', '7rem auto', '22rem auto')};
  }
`;

export default ContentContainer;
