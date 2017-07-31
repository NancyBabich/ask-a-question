import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Colors from './../consts/Colors';
import Container from './../styled-components/Container';
import RadioButton from './RadioButton';

export default class DisplaySettings extends Component {
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
      <DisplaySettingsContainer>
        <StyledContainer>
          <AddQuestion>
            Questions
            <AddButton>+</AddButton>
          </AddQuestion>
          <Settings>
            <FilterSettings>
              <FilterRadioButton>
                <RadioButton
                  on={!this.state.displayAllQuestions}
                  onClick={() => this.toggleDisplaySettings('myShelf')}
                />
                <span>My shelf</span>
              </FilterRadioButton>
              <FilterRadioButton>
                <RadioButton
                  on={this.state.displayAllQuestions}
                  onClick={() => this.toggleDisplaySettings('allQuestions')}
                />
                <span>All questions</span>
              </FilterRadioButton>
            </FilterSettings>
            <SortSettings>
              <span>Sort by:</span>
              <Sort
                active={!this.state.sortByHot}
                onClick={() => this.toggleDisplaySettings('recent')}
              >
                recent
              </Sort>
              <span>or</span>
              <Sort
                active={this.state.sortByHot}
                onClick={() => this.toggleDisplaySettings('hot')}
              >
                <span>hot</span>
              </Sort>
            </SortSettings>
          </Settings>
        </StyledContainer>
        {this.props.searchBar &&
          <StyledContainer>
            <StyledInput placeholder="Search questions" />
          </StyledContainer>}
      </DisplaySettingsContainer>
    );
  }
}

const AddButton = styled.div`
  margin-left: 2rem;
  width: 2rem;
  height: 2rem;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const AddQuestion = Centered.extend`
  display: flex;
  justify-content: flex-start;
  width: 40%;
  text-transform: uppercase;
`;

const DisplaySettingsContainer = Container.extend`
  width: 60%;
  align-items: space-between;
`;

const FilterRadioButton = Centered.extend`
  justify-content: flex-start;
  width: 50%;
`;

const FilterSettings = Centered.extend`width: 50%;`;

const Settings = Centered.extend`
  display: flex;
  width: 60%;
`;

const Sort = styled.div`
  color: ${ifProp('active', `${Colors.darkGray}`, `${Colors.darkBlue}`)};
  font-weight: bold;
  text-decoration: ${ifProp('active', 'underline', 'none')};
  &:hover {
    cursor: pointer;
  }
`;

const SortSettings = Centered.extend`
  width: 50%;
  justify-content: flex-end;
`;

const StyledContainer = Container.extend`
  flex-direction: row;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 87.5%;
  background-color: ${Colors.lightGray};
`;
