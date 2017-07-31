import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Colors from './../consts/Colors';

const Header = ({ rightComponent }) =>
  <NavContainer>
    <BackButtonContainer>
      <BackButton>
        <BackArrow />
      </BackButton>
    </BackButtonContainer>
    {rightComponent}
  </NavContainer>;

const BackArrow = styled.div`
  position: absolute;
  left: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-bottom: solid 1px ${Colors.gray};
  border-left: solid 1px ${Colors.gray};
  transform: rotate(45deg);
`;

const BackButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: solid 1px ${Colors.gray};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const BackButtonContainer = Centered.extend`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

export default Header;
