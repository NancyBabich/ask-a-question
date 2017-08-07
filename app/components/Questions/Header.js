import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { withRouter } from 'react-router';

import Breakpoints from '../../consts/Breakpoints';
import Centered from './../../styled-components/Centered';
import Container from './../../styled-components/Container';
import Colors from './../../consts/Colors';
import NavButton from '../../styled-components/NavButton';

const Header = ({ history, rightComponent, searchBar, singleQuestion }) =>
  <NavContainer singleQuestion={singleQuestion}>
    <BackButtonContainer>
      <NavButton big left onClick={() => history.go(-1)} />
    </BackButtonContainer>
    <DisplaySettingsContainer>
      <StyledContainer singleQuestion={singleQuestion}>
        <AddQuestion>
          <div>
            {singleQuestion ? 'Question' : 'Questions'}
          </div>
          <AddButtonContainer>
            <AddButton>+</AddButton>
          </AddButtonContainer>
        </AddQuestion>
        {rightComponent}
      </StyledContainer>
      <SearchContainer>
        {searchBar &&
          <InputContainer>
            <StyledInput placeholder="Search questions" />
            <SubmitButtton>search</SubmitButtton>
          </InputContainer>}
      </SearchContainer>
    </DisplaySettingsContainer>
  </NavContainer>;

export default withRouter(Header);

const AddButton = styled.div`
  margin-left: 2rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  text-align: center;
  line-height: 1.25rem;
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const AddQuestion = Centered.extend`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 1300px) {
    width: 40%;
  }

  @media screen and (max-width: 1130px) {
    width: 30%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: center;
  }
`;

const BackButtonContainer = Container.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 50%;

  @media screen and (max-width: 650px) {
    visibility: hidden;
  }
`;

const DisplaySettingsContainer = Container.extend`
  width: 60%;
  align-items: space-between;
`;

const InputContainer = Container.extend`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: ${ifProp('singleQuestion', '5rem', '8rem')};
  background-color: white;
  font-weight: 700;
  padding-top: 2rem;
  z-index: 2;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    height: ${ifProp('singleQuestion', '5rem', '10rem')};
  }

  @media screen and (max-width: 650px) {
    height: ${ifProp('singleQuestion', '5rem', '13rem')};
  }

  @media screen and (max-width: 550px) {
    height: 15rem;
  }

  @media screen and (max-width: 415px) {
    height: 17rem;
  }
`;

const SearchContainer = Container.extend`
  flex-direction: row;
  width: 100%;
  height: 50%;
  padding: 0;
  justify-content: center;
`;

const StyledContainer = Container.extend`
  flex-direction: row;
  width: 100%;
  height: 50%;
  padding: 0;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    flex-direction: ${ifProp('singleQuestion', 'row', 'column')};
  }

   @media screen and (max-width: 700px) {
    f;dh;flh;lflex-direction: ${prop('singleQuestion', 'column')};
  }


`;

const StyledInput = styled.input`
  width: 75%;
  background-color: ${Colors.lightGray};
  padding: .5rem;
  border: 1px solid ${Colors.gray};

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const SubmitButtton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  text-transform: uppercase;
  border: solid 1px ${Colors.darkGray};
  color: ${Colors.darkGray};
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 1.75rem;
    margin-top: 1rem;
  }
`;
