import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import Colors from '../consts/Colors';

const UserStatsTile = ({ number, fact, rotation }) =>
  <Tile style={{ transform: `rotate(${rotation}deg)` }}>
    <TileData style={{ transform: `rotate(-${rotation}deg` }}>
      <div>
        {number}
      </div>
      <div>
        {fact}
      </div>
    </TileData>
  </Tile>;

export default UserStatsTile;

const Tile = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  background-color: ${Colors.lightBlue};
`;

const TileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
