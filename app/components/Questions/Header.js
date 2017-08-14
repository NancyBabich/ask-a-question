import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';

import Breakpoints from '../../consts/breakpoints';
import Colors from './../../consts/colors';
import NavButton from '../styled-components/NavButton';

const Header = ({
  handleSearch,
  history,
  rightComponent,
  searchBar,
  singleQuestion
}) => {
  let searchInput;

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSearch(searchInput.value);
  };

  return (
    <NavContainer singleQuestion={singleQuestion}>
      <BackButtonContainer singleQuestion={singleQuestion}>
        <NavButton
          big
          left
          onClick={() => history.go(-1)}
          singleQuestion={singleQuestion}
        />
      </BackButtonContainer>
      <DisplaySettingsContainer singleQuestion={singleQuestion}>
        <StyledContainer singleQuestion={singleQuestion}>
          <AddQuestion singleQuestion={singleQuestion}>
            <div>
              {singleQuestion ? 'Question' : 'Questions'}
            </div>
            <AddButtonContainer singleQuestion={singleQuestion}>
              <AddButton singleQuestion={singleQuestion}>
                <AddButtonBar />
              </AddButton>
            </AddButtonContainer>
          </AddQuestion>
          {rightComponent}
        </StyledContainer>
        <SearchContainer>
          {searchBar &&
            <FormContainer>
              <StyledForm onSubmit={handleFormSubmit}>
                <InputContainer>
                  <input
                    style={{
                      width: '100%',
                      backgroundColor: `${Colors.lightGray}`,
                      padding: '.5rem',
                      border: `1px solid ${Colors.gray}`
                    }}
                    type="text"
                    placeholder="Search questions"
                    ref={input => (searchInput = input)}
                  />
                </InputContainer>
                <SubmitButton type="submit">search</SubmitButton>
              </StyledForm>
            </FormContainer>}
        </SearchContainer>
      </DisplaySettingsContainer>
    </NavContainer>
  );
};

export default withRouter(Header);

const AddButton = styled.div`
  position: relative;
  margin-left: 2rem;
  width: 20px;
  height: 20px;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  color: white;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 415px) {
    margin-left: ${ifProp('singleQuestion', '1rem', '0')};
  }

  @media screen and (max-width: 275px) {
    margin-left: ${ifProp('singleQuestion', '.5rem', '0')};
  }

  @media screen and (max-width: 245px) {
    margin-left: ${ifProp('singleQuestion', '.1rem', '0')};
  }
`;

const AddButtonBar = styled.div`
  position: absolute;
  top: 8px;
  left: 2px;
  height: 2px;
  width: 14px;
  background-color: white;
  &::after {
    position: absolute;
    height: 2px;
    width: 14px;
    content: '';
    transform: rotate(90deg);
    background-color: white;
  }
`;

const AddButtonContainer = styled.div`
  height: 100%;

  @media screen and (max-width: 415px) {
    margin: ${ifProp('singleQuestion', '0', '1rem 0')};
  }
`;

const AddQuestion = styled.div`
  display: flex;
  align-items: center;
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

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: ${ifProp('singleQuestion', 'flex-start', 'center')};
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    justify-content: ${ifProp('singleQuestion', 'space-between', 'center')};
  }

  @media screen and (max-width: 415px) {
    flex-direction: ${ifProp('singleQuestion', 'row', 'column')};
  }
`;

const BackButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 19%;
  height: 50%;

  @media screen and (max-width: 650px) {
    display: ${ifProp('singleQuestion', 'flex', 'none')};
  }
`;

const DisplaySettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 61%;
  align-items: space-between;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 80%;
    padding-right: 1rem;
  }

  @media screen and (max-width: 650px) {
    width: ${ifProp('singleQuestion', '80%', '100%')};
    padding-right: ${ifProp('singleQuestion', '1rem', '0')};
  }

  @media screen and (max-width: 285px) {
    align-items: ${ifProp('singleQuestion', 'flex-end', 'space-between')};
  }
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: 650px) {
    align-items: center;
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: ${ifProp('singleQuestion', '7rem', '10rem')};
  background-color: white;
  font-weight: 700;
  padding-top: 2rem;
  z-index: 2;
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.47);

  @media screen and (max-width: ${Breakpoints.tablet}) {
    height: ${ifProp('singleQuestion', '7rem', '14rem')};
  }

  @media screen and (max-width: 550px) {
    height: ${ifProp('singleQuestion', '7rem', '17rem')};
  }

  @media screen and (max-width: 415px) {
    height: ${ifProp('singleQuestion', '7rem', '22rem')};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  padding: 0;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 50%;
  padding: 0;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    flex-direction: ${ifProp('singleQuestion', 'row', 'column')};
  }
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 70%;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 70%;
    align-items: center;
  }
`;

const InputContainer = styled.div`
  width: 81%;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17%;
  margin-left: .5rem;
  text-transform: uppercase;
  border: solid 1px ${Colors.darkGray};
  color: ${Colors.gray};
  font-weight: 700;
  background-color: white;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
    height: 2rem;
    margin: 1rem 0 0 0;
  }
`;
