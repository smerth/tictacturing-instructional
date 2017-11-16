import React, {Component} from 'react';
import Styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const StayVisible = Styled.div`
position: absolute;
margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
transition: margin .2s;
`

export const NavToggleButton = (props) => {
  return(
    <StayVisible
      {...props}
    >
      <FloatingActionButton
        onTouchTap={props.toggle}
      >
        <MenuIcon/>
      </FloatingActionButton>
    </StayVisible>

  )
}
