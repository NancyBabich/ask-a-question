import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';
import Container from './../styled-components/Container';
import RadioButton from './RadioButton';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllQuestions: false
    };
  }

  handleDisplayChange = buttonName => {
    if (
      (buttonName === 'allQuestions' && !this.state.displayAllQuestions) ||
      (buttonName === 'myShelf' && this.state.displayAllQuestions === true)
    ) {
      this.setState({
        displayAllQuestions: !this.state.displayAllQuestions
      });
    }
  };

  render() {
    return (
      <NavContainer>
        <BackButton>
          <BackArrow />
        </BackButton>
        <Container>
          <StyledContainer>
            Questions
            <AddButton>+</AddButton>
            <div>
              My shelf{' '}
              <RadioButton
                on={!this.state.displayAllQuestions}
                onClick={() => this.handleDisplayChange('myShelf')}
              />
            </div>
            <div>
              All questions{' '}
              <RadioButton
                on={this.state.displayAllQuestions}
                onClick={() => this.handleDisplayChange('allQuestions')}
              />
            </div>
            <div>Sort by recent or hot</div>
          </StyledContainer>
          {this.props.searchBar &&
            <StyledContainer>
              <div>search bar</div>
            </StyledContainer>}
        </Container>
      </NavContainer>
    );
  }
}

const AddButton = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${Colors.darkBlue};
  border: 1px solid ${Colors.darkBlue};
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
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
