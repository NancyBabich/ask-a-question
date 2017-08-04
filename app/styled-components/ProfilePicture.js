/* @flow */

import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

const ProfilePicture = styled.img`
  width: ${ifProp('big', '5rem', '3.5rem')};
  height: ${ifProp('big', '5rem', '3.5rem')};
  border-radius: 50%;
  &:hover {
    cursor: ${ifProp('big', 'normal', 'pointer')};
  }
`;

export default ProfilePicture;
