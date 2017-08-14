import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Breakpoints from '../../consts/breakpoints';
import Colors from './../../consts/colors';
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
        <span>recent</span>
      </SortOption>
      <span>&nbsp; or &nbsp;</span>
      <SortOption active={sortByHot} onClick={() => handleDisplayChange('hot')}>
        <span>hot</span>
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
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
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
  align-items: center;
  color: ${ifProp('active', `${Colors.darkGray}`, `${Colors.darkBlue}`)};
  text-decoration: ${ifProp('active', 'underline', 'none')};
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
`;

const SortSettings = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: italic;
  font-family: 'Crimson Text';
  font-size: 1rem;

  @media screen and (max-width: ${Breakpoints.tablet}) {
    width: auto;
    margin-top: 1.25rem;
  }

  @media screen and (max-width: 650px) {
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
