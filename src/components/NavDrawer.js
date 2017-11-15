import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';


class NavDrawer extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return(
      <div>
        <FloatingActionButton
          onTouchTap={this.toggle}
        >
          <MenuIcon/>
        </FloatingActionButton>
        <Drawer
          open={this.state.open}
        >
          <div
            style={
              {
                height: '200px',
                width: '100%',
                backgroundColor: 'salmon',
              }
            }
          >
            Login Container
          </div>
          <Divider/>
          <MenuItem
            primaryText={'Play'}
          />
          <MenuItem
            primaryText={'Profile'}
          />
        </Drawer>

      </div>
    )
  }
}

export default NavDrawer;
