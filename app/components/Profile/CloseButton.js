import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../../consts/Colors';

const CloseButton = ({ history }) =>
  <ButtonContainer onClick={() => history.go(-1)}>
    <CloseButtonBar />
    <CloseButtonBar />
  </ButtonContainer>;

export default CloseButton;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  padding: .75rem;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButtonBar = styled.div`
  position: absolute;
  background-color: ${Colors.gray};
  width: 15px;
  height: 2px;
  left: 2px;
  bottom: 9px;
  &:first-child {
    transform: rotate(45deg);
  }
  &:last-child {
    transform: rotate(-45deg);
  }
`;