import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Colors from './../consts/Colors';
import Container from './../styled-components/Container';
import RadioButton from './RadioButton';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllQuestions: false,
      sortByHot: false
    };
  }

  toggleDisplaySettings = buttonName => {
    if (
      (buttonName === 'allQuestions' && !this.state.displayAllQuestions) ||
      (buttonName === 'myShelf' && this.state.displayAllQuestions === true)
    ) {
      this.setState({
        displayAllQuestions: !this.state.displayAllQuestions
      });
    }

    if (
      (buttonName === 'recent' && this.state.sortByHot) ||
      (buttonName === 'hot' && !this.state.sortByHot)
    ) {
      this.setState({
        sortByHot: !this.state.sortByHot
      });
    }
  };

  render() {
    return (
      <NavContainer>
        <BackButtonContainer>
          <BackButton>
            <BackArrow />
          </BackButton>
        </BackButtonContainer>
        <DisplaySettingsContainer>
          <StyledContainer>
            <StyledContainer>
              Questions
              <AddButton>+</AddButton>
            </StyledContainer>
            <StyledContainer>
              <StyledContainer>
                <RadioButton
                  on={!this.state.displayAllQuestions}
                  onClick={() => this.toggleDisplaySettings('myShelf')}
                />
                <span>My shelf</span>
              </StyledContainer>
              <StyledContainer>
                <RadioButton
                  on={this.state.displayAllQuestions}
                  onClick={() => this.toggleDisplaySettings('allQuestions')}
                />
                <span>All questions</span>
              </StyledContainer>
              <StyledContainer>
                Sort by:{' '}
                <Sort
                  active={!this.state.sortByHot}
                  onClick={() => this.toggleDisplaySettings('recent')}
                >
                  recent
                </Sort>{' '}
                or{' '}
                <Sort
                  active={this.state.sortByHot}
                  onClick={() => this.toggleDisplaySettings('hot')}
                >
                  hot
                </Sort>
              </StyledContainer>
            </StyledContainer>
          </StyledContainer>
          {this.props.searchBar &&
            <StyledContainer>
              <StyledInput placeholder="Search questions" />
            </StyledContainer>}
        </DisplaySettingsContainer>
      </NavContainer>
    );
  }
}

const AddButton = styled.div`
  margin-left: 2rem;
  width: 1rem;
  height: 1rem;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
  &:hover {
    cursor: pointer;
  }
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

const BackButtonContainer = Centered.extend`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const DisplaySettingsContainer = Container.extend`
  width: 80%;
  align-items: space-between;
  padding-right: 10rem;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

const Sort = styled.div`
  color: ${ifProp('active', `${Colors.darkGray}`, `${Colors.darkBlue}`)};
  font-weight: bold;
  text-decoration: ${ifProp('active', 'underline', 'none')};
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = Container.extend`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: ${Colors.lightGray};
`;
