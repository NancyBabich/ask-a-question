import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Centered from './../styled-components/Centered';
import Colors from './../consts/Colors';
import Container from './../styled-components/Container';
import RadioButton from './RadioButton';

export default class FilterSort extends Component {
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
      <FilterSortContainer>
        <FilterSettings>
          <FilterOption>
            <RadioButton
              on={!this.state.displayAllQuestions}
              onClick={() => this.toggleDisplaySettings('myShelf')}
            />
            <span>My shelf</span>
          </FilterOption>
          <FilterOption>
            <RadioButton
              on={this.state.displayAllQuestions}
              onClick={() => this.toggleDisplaySettings('allQuestions')}
            />
            <span>All questions</span>
          </FilterOption>
        </FilterSettings>
        <SortSettings>
          <div>Sort by: &nbsp;</div>
          <SortOption
            active={!this.state.sortByHot}
            onClick={() => this.toggleDisplaySettings('recent')}
          >
            recent
          </SortOption>
          <div>&nbsp; or &nbsp;</div>
          <SortOption
            active={this.state.sortByHot}
            onClick={() => this.toggleDisplaySettings('hot')}
          >
            hot
          </SortOption>
        </SortSettings>
      </FilterSortContainer>
    );
  }
}

const FilterSortContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding: 1rem 0;
  font-size: .9rem;
`;

const FilterOption = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-items: flex-end;
`;

const FilterSettings = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
`;

const SortOption = styled.div`
  display: flex;

  align-items: flex-end;
  color: ${ifProp('active', `${Colors.darkGray}`, `${Colors.darkBlue}`)};
  text-decoration: ${ifProp('active', 'underline', 'none')};
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
`;

const SortSettings = Centered.extend`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  align-items: flex-end;
  font-family: 'Crimson Text';
  font-size: 1rem;
`;
