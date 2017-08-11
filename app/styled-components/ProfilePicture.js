import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const ProfilePicture = styled.img`
  display: block;
  width: ${ifProp('big', '5rem', '3rem')};
  height: ${ifProp('big', '5rem', '3rem')};
  border-radius: 50%;
  &:hover {
    cursor: ${ifProp('big', 'normal', 'pointer')};
  }
`;

export default ProfilePicture;
