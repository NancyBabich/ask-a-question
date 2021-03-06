import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const UserStatsTile = ({ number, fact, rotation, translateX }) =>
  <Tile
    style={{ transform: `rotate(${rotation}deg)`, left: `${translateX}px` }}
  >
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
  position: relative;
  width: 5rem;
  height: 5rem;
  background-color: ${Colors.lightBlue};

  @media screen and (max-width: 360px) {
    width: 4rem;
    height: 4rem;
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
