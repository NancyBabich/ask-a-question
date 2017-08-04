import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import Colors from '../../consts/Colors';

const UserStatsTile = ({ number, fact, rotation }) =>
  <Tile style={{ transform: `rotate(${rotation}deg)` }}>
    <TileData style={{ transform: `rotate(-${rotation}deg` }}>
      <Number>
        {number}
      </Number>
      <Fact>
        {fact}
      </Fact>
    </TileData>
  </Tile>;

export default UserStatsTile;

const Fact = styled.div`
  font-family: 'Crimson Text';
  font-style: italic;
`;

const Number = styled.div`font-weight: 700;`;

const Tile = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: ${Colors.lightBlue};
  &:last-child {
  }
`;

const TileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
