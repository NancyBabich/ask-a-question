import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Colors from './../consts/Colors';
import Container from './../styled-components/Container';
import RadioButton from './RadioButton';

export default class FilterSortSearch extends Component {
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
      <FilterSortSearchContainer>
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
          <div>Sort by: &nbsp;</div>
          <Sort
            active={!this.state.sortByHot}
            onClick={() => this.toggleDisplaySettings('recent')}
          >
            recent
          </Sort>
          <div>&nbsp; or &nbsp;</div>
          <Sort
            active={this.state.sortByHot}
            onClick={() => this.toggleDisplaySettings('hot')}
          >
            hot
          </Sort>
        </SortSettings>
      </FilterSortSearchContainer>
    );
  }
}

const FilterSortSearchContainer = Centered.extend`
  width: 100%;
  padding: 0 2rem;
  height: 100%;
  font-size: .9rem;
  align-items: flex-end;
`;

const FilterRadioButton = Centered.extend`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  align-items: flex-end;
`;

const FilterSettings = Centered.extend`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const Sort = styled.div`
  color: ${ifProp('active', `${Colors.darkGray}`, `${Colors.darkBlue}`)};
  text-decoration: ${ifProp('active', 'underline', 'none')};
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
`;

const SortSettings = Centered.extend`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  align-items: flex-end;
`;
