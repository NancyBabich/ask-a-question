import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import Colors from '../consts/Colors';

const NavButton = ({ big, fill, left, onClick, singleQuestion }) =>
  <Button
    big={big}
    fill={fill}
    onClick={onClick}
    singleQuestion={singleQuestion}
  >
    <NavArrow big={big} fill={fill} left={left} />
  </Button>;

export default NavButton;

const NavArrow = styled.div`
  position: absolute;
  width: ${ifProp('big', '.75rem', '.45rem')};
  height: ${ifProp('big', '.75rem', '.45rem')};
  border-bottom: solid 1px ${ifProp('fill', 'white', `${Colors.gray}`)};
  border-left: solid 1px ${ifProp('fill', 'white', `${Colors.gray}`)};
  transform: ${ifProp('left', 'translateX(100%)', 'translateX(50%)')}
    ${ifProp('left', 'rotate(45deg)', 'rotate(225deg)')};
`;

const Button = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: ${ifProp('big', '2rem', '1.25rem')};
  height: ${ifProp('big', '2rem', '1.25rem')};
  border: 1px solid ${Colors.gray};
  border-radius: 50%;
  background-color: ${ifProp('fill', `${Colors.gray}`, 'initial')};
  &:hover {
    cursor: pointer;
    background-color: ${ifProp('fill', `${Colors.darkBlue}`, 'initial')};
    border-color: ${ifProp('fill', `${Colors.darkBlue}`, `${Colors.gray}`)};
  }
`;
