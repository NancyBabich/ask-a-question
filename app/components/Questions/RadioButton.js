import React from 'react';
import styled from 'styled-components';

import Colors from './../../consts/Colors';

const RadioButton = ({ on, onClick }) =>
  <RadioButtonSymbol onClick={onClick}>
    {on && <RadioButtonFill />}
  </RadioButtonSymbol>;

const RadioButtonSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: .75rem;
  height: .75rem;
  border: 1px solid ${Colors.darkGray};
  border-radius: 50%;
  margin: 0 .5rem 0 0;
  &:hover {
    cursor: pointer;
  }
`;

const RadioButtonFill = styled.div`
  width: .25rem;
  height: .25rem;
  background-color: ${Colors.darkGray};
  border: 1px solid ${Colors.darkGray};
  border-radius: 50%;
`;

export default RadioButton;
