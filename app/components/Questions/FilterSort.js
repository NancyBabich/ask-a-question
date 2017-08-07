import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Breakpoints from '../../consts/Breakpoints';
import Centered from './../../styled-components/Centered';
import Colors from './../../consts/Colors';
import Container from './../../styled-components/Container';
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
          <span>Sort by: &nbsp;</span>
          <SortOption
            active={!this.state.sortByHot}
            onClick={() => this.toggleDisplaySettings('recent')}
          >
            recent
          </SortOption>
          <span>&nbsp; or &nbsp;</span>
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
  align-items: flex-end;
  width: 50%;
  height: 100%;
  padding: 1rem 0;
  font-size: .9rem;

  @media screen and (max-width: 1300px) {
    width: 60%;
  }

  @media screen and (max-width: 1130px) {
    width: 70%;
  }

  @media screen and (max-width: ${Breakpoints.tablet}) {
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterOption = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    justify-content: flex-start;
    width: auto;
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const FilterSettings = styled.div`
  width: 55%;
  display: flex;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 50%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 415px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
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
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  font-family: 'Crimson Text';
  font-size: 1rem;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: 50%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  @media screen and (max-width: 415px) {
    justify-content: flex-start;
  }
`;
