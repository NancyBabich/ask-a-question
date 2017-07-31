import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Container from './../styled-components/Container';
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
  left: .75rem;
  width: .75rem;
  height: .75rem;
  border-bottom: solid 1px ${Colors.gray};
  border-left: solid 1px ${Colors.gray};
  transform: rotate(45deg);
`;

const BackButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: solid 1px ${Colors.gray};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const BackButtonContainer = Container.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10rem;
`;

export default Header;
