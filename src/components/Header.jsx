import React from 'react';
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {black, white} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

const iconStyles = {
  marginLeft: -24
}

const titleStyles = {
  marginLeft: 10
}

class Header extends React.Component {

  render(){

      return (
        <Toolbar className = "color-highlight header-bar">
          <ToolbarGroup>
          <FontIcon style={iconStyles} className="material-icons" color={white}>menu</FontIcon>
          <ToolbarTitle style={titleStyles} color={white}  className="app-title" text="Caroline Hatwell"/>
          </ToolbarGroup>
       </Toolbar>
    )
  }

}

export default Header
