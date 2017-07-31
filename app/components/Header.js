import React from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';
import Container from './../styled-components/Container';

const Header = ({ rightComponent, searchBar }) =>
  <NavContainer>
    <BackButton>
      <BackArrow />
    </BackButton>
    <Container>
      <StyledContainer>
        Questions
        <AddButton>+</AddButton>
      </StyledContainer>
      {searchBar &&
        <StyledContainer>
          <div>search bar</div>
        </StyledContainer>}
    </Container>
  </NavContainer>;

const AddButton = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  text-align: center;
`;

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

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

const StyledContainer = styled(Container)`
  flex-direction: row;
`;

export default Header;
