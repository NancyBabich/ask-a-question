import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Breakpoints from '../../consts/Breakpoints';
import Centered from './../../styled-components/Centered';
import Colors from './../../consts/Colors';
import Container from './../../styled-components/Container';
import RadioButton from './RadioButton';

const FilterSort = ({ displayAllQuestions, handleDisplayChange, sortByHot }) =>
  <FilterSortContainer>
    <FilterSettings>
      <FilterOption>
        <RadioButton
          on={!displayAllQuestions}
          onClick={() => handleDisplayChange('myShelf')}
        />
        <span>My shelf</span>
      </FilterOption>
      <FilterOption>
        <RadioButton
          on={displayAllQuestions}
          onClick={() => handleDisplayChange('allQuestions')}
        />
        <span>All questions</span>
      </FilterOption>
    </FilterSettings>
    <SortSettings>
      <span>Sort by: &nbsp;</span>
      <SortOption
        active={!sortByHot}
        onClick={() => handleDisplayChange('recent')}
      >
        recent
      </SortOption>
      <span>&nbsp; or &nbsp;</span>
      <SortOption active={sortByHot} onClick={() => handleDisplayChange('hot')}>
        hot
      </SortOption>
    </SortSettings>
  </FilterSortContainer>;

export default FilterSort;

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
    width: auto;
  }

  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 50%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 415px) {
    width: 50%;
    flex-direction: column;
  }

  @media screen and (max-width: 220px) {
    width: 60%;
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
    width: auto;
    margin-left: 2rem;
  }

  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 50%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  @media screen and (max-width: 415px) {
    width: 50%;
    justify-content: flex-start;
    margin-left: 0;
  }

  @media screen and (max-width: 310px) {
    width: 100%;
    justify-content: center;
  }
`;
