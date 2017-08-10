import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/Colors';

export default class VotingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      wasClicked: true
    });
    this.props.handleVote();
  };

  render() {
    return (
      <VotingArrow
        down={this.props.down}
        onClick={this.handleClick}
        wasClicked={this.state.wasClicked}
      />
    );
  }
}

const VotingArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: ${ifProp('down', 'none', `10px solid ${Colors.darkBlue}`)};
  border-top: ${ifProp('down', `10px solid ${Colors.darkBlue}`, 'none')};
  &:hover {
    cursor: ${ifProp('wasClicked', 'normal', 'pointer')};
  }
`;
